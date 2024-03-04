const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}


module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        externals: {
            echarts: 'echarts'
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '南通大学信息化大屏';
                return args;
            });

        config.module
            .rule('hdr')
            .test(/\.hdr$/)
            .use('file')
            .loader('file-loader');

        if (process.env.NODE_ENV == 'production') {
            if (process.env.npm_config_report) {
                config
                    .plugin('webpack-bundle-analyzer')
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                    .end();

                config.plugins.delete('prefetch');
            }
        }
    },
    // NTDX:配置跨域代理，配置好以后要CTRL+C终止运行，重新npm run serve
    devServer: {
        proxy: {
            '/': {
                target: 'http://127.0.0.1:8089',
                changOrigin: true,
                pathRewrite: { '^/': '' }
            }
        }
    },
    outputDir: 'website'
};
