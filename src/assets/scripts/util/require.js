const doc = document;
const head = doc.head || doc.getElementsByTagName("head")[0] || doc.documentElement;
const baseElement = head.getElementsByTagName("base")[0];
const config = {
    modules: {},
    status: {},
    timeout: {}
};
const modules = {
    china: '',
    world: '',
    echartsgl: 'https://cdn.bootcdn.net/ajax/libs/echarts-gl/1.1.0/echarts-gl.min.js',
};

function isArray(arr) {
    return Array.isArray ? Array.isArray(arr) : Object.prototype.toString.call(arr) === '[object Array]';
}

function isFunction(o) {
    return Object.prototype.toString.call(o) === '[object Function]';
}

function require(pathArr, func) {
    let currentlyAddingScript = null;
    pathArr.forEach((path, index) => {
        if (modules[path]) {
            request(path);
        } else {
            checkAllFiles();
        }
    });

    function request(path) {
        let node = doc.createElement('script');

        addOnload(node, path);

        node.type = 'text/javascript';
        node.async = 'true';
        node.src = modules[path];

        currentlyAddingScript = node;

        if (baseElement) {
            head.insertBefore(node, baseElement);
        } else {
            head.appendChild(node);
        }

        currentlyAddingScript = null;
    }

    function addOnload(node, path) {
        let supportOnload = "onload" in node;

        if (supportOnload) {
            node.onload = onload;
            node.onerror = () => {
                onload(true);
            };
        } else {
            node.onreadystatechange = () => {
                if (/loaded|complete/.test(node.readyState)) {
                    onload();
                }
            };
        }

        function onload() {
            node.onload = null;
            node.onerror = null;
            node.onreadystatechange = null;

            head.removeChild(node);
            node = null;
            config.modules[path] = true;

            checkAllFiles();
        }
    }

    function checkAllFiles() {
        let allLoaded = true;

        pathArr.forEach((path, index) => {
            if (!config.modules[path]) {
                allLoaded = false;
            }
        });

        allLoaded && func && func();
    }
}

export function loadCss(options) {
    let url = options.url,
        callback = isFunction(options.callback) ? options.callback : function () {
            return;
        },
        id = options.id,
        node = document.createElement('link'),
        supportOnload = "onload" in node,
        isOldWebKit = +navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/?(\d+).*/i, "$1") < 536,
        protectNum = 300000;

    node.rel = "stylesheet";
    node.type = "text/css";
    node.href = url;

    if (typeof id !== "undefined") {
        node.id = id;
    }

    document.getElementsByTagName("head")[0].appendChild(node);

    if (supportOnload || !isOldWebKit) {
        setTimeout(() => {
            pollCss(node, callback, 0);
        }, 1);
    }

    if (supportOnload) {
        node.onload = onload;
        node.onerror = () => {
            onload();
        };

    } else {
        node.onreadystatechange = () => {
            if (/loaded|complete/.test(node.readyState)) {
                onload();
            }
        };
    }

    function onload() {
        node.onload = null;
        node.onerror = null;
        node.onreadystatechange = null;
        node = null;

        callback();
    }

    function pollCss(node, callback, step) {
        let sheet = node.sheet,
            isLoaded;

        step += 1;

        if (step > protectNum) {
            isLoaded = true;

            node = null;

            callback();

            return;
        }

        if (isOldWebKit) {
            if (sheet) {
                isLoaded = true;
            }
        } else if (sheet) {
            try {
                if (sheet.cssRules) {
                    isLoaded = true;
                }
            } catch (ex) {
                if (ex.name === 'NS_ERROR_DOM_SECURITY_ERR') {
                    isLoaded = true;
                }
            }
        }

        setTimeout(() => {
            if (isLoaded) {
                callback();
            } else {
                pollCss(node, callback, step);
            }
        }, 20);
    }
}

export default require;