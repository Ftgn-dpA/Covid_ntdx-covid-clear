module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-undef': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/script-indent": ["error", 4, {
        "baseIndent": 1
    }],
    "vue/html-indent": ["error", 4, {
        "attribute": 1,
        "baseIndent": 1,
        "closeBracket": 0,
        "alignAttributesVertically": true,
        "ignores": []
    }],
    /**
     * Base Rules
     */
    // 支持在模版中使用 eslint-disable-next-line 等注释
    'vue/comment-directive': 'error',
    // 已定义的 JSX Element 必须使用
    'vue/jsx-uses-vars': 'error',

    /**
     * Essential
     */
    // 禁止在计算属性中执行异步操作
    'vue/no-async-in-computed-properties': 'error',
    // 禁止重复字段名称
    'vue/no-dupe-keys': 'off',
    // 禁止重复属性
    'vue/no-duplicate-attributes': 'error',
    // 禁止语法错误
    'vue/no-parsing-error': 'error',
    // 禁止使用保留关键字
    'vue/no-reserved-keys': 'error',
    // 组件 data 必须是一个函数
    'vue/no-shared-component-data': 'error',
    // 禁止在计算属性中改变属性
    'vue/no-side-effects-in-computed-properties': 'off',
    // 禁止 <template> 使用 key 属性
    'vue/no-template-key': 'off',
    // 禁止在 <textarea> 中出现 {{message}}
    'vue/no-textarea-mustache': 'error',
    // 禁止定义在 components 中的组件未使用
    'vue/no-unused-components': 'error',
    // 禁止在模版中出现未使用的变量
    'vue/no-unused-vars': 'error',
    // 禁止在同一个元素上使用 v-if 和 v-for 指令
    'vue/no-use-v-if-with-v-for': 'error',
    // <component> 必须有 v-bind:is
    'vue/require-component-is': 'error',
    // props 的取值必须是构造函数
    'vue/require-prop-type-constructor': 'error',
    // render 需要有返回值
    'vue/require-render-return': 'error',
    // v-for 指令的元素必须有 v-bind:key
    'vue/require-v-for-key': 'error',
    // prop 的默认值必须匹配它的类型
    'vue/require-valid-default-prop': 'off',
    // 计算属性必须有返回值
    'vue/return-in-computed-property': 'error',
    // 当一个节点上出现两个 v-on:click 时，其中一个必须为 exact
    'vue/use-v-on-exact': 'error',
    // template 的根节点必须合法
    'vue/valid-template-root': 'error',
    // v-bind 指令必须合法
    'vue/valid-v-bind': 'error',
    // v-cloak 指令必须合法
    'vue/valid-v-cloak': 'error',
    // v-else-if 指令必须合法
    'vue/valid-v-else-if': 'error',
    // v-else 指令必须合法
    'vue/valid-v-else': 'error',
    // v-for 指令必须合法
    'vue/valid-v-for': 'error',
    // v-html 指令必须合法
    'vue/valid-v-html': 'error',
    // v-if 指令必须合法
    'vue/valid-v-if': 'error',
    // v-model 指令必须合法
    'vue/valid-v-model': 'error',
    // v-on 指令必须合法
    'vue/valid-v-on': 'error',
    // v-once 指令必须合法
    'vue/valid-v-once': 'error',
    // v-pre 指令必须合法
    'vue/valid-v-pre': 'error',
    // v-show 指令必须合法
    'vue/valid-v-show': 'error',
    // v-text 指令必须合法
    'vue/valid-v-text': 'error',

    /**
     * Strongly Recommended
     */
    // 限制自定义组件的属性风格
    'vue/attribute-hyphenation': 'off',
    // 在标签的右括号之前不允许换行
    'vue/html-closing-bracket-newline': 'off',
    // 标签的右括号前不允许空格
    'vue/html-closing-bracket-spacing': 'off',
    // 强制结束标签
    'vue/html-end-tags': 'error',
    // 强制使用HTML属性的引号为双引号或单引号
    'vue/html-quotes': [
        "error",
        "double"
    ],
    // html 简写关闭 <div />
    'vue/html-self-closing': 'off',
    // 限制每行最大属性数
    'vue/max-attributes-per-line': 'off',
    // 在多行元素的内容之前和之后需要换行
    'vue/multiline-html-element-content-newline': [
        'error',
        {
            'ignoreWhenEmpty': true,
            'ignores': [
                'pre',
                'textarea'
            ],
            'allowEmptyLines': true
        }
    ],
    // {{}} 前后必须有空格
    'vue/mustache-interpolation-spacing': [
        "error",
        "always"
    ],
    // 在Vue组件中为name属性强制使用特定大小写
    'vue/name-property-casing': 'off',
    // 不允许多个空格
    'vue/no-multi-spaces': [
        'error',
        {
            "ignoreProperties": false
        }
    ],
    // 禁止属性中等号周围的空格
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    // 不允许在外部作用域声明隐藏变量
    'vue/no-template-shadow': 'error',
    // 在Vue组件中为Prop名称强制使用特定大小写
    'vue/prop-name-casing': [
        'error',
        'camelCase'
    ],
    // Vue组件中为Prop属性 需要默认类型
    'vue/require-default-prop': 'off',
    // 需要在Prop中定义类型
    'vue/require-prop-types': 'off',
    // template 单个元素换行
    'vue/singleline-html-element-content-newline': [
        'error',
        {
            'ignoreWhenNoAttributes': true,
            'ignoreWhenEmpty': true,
            'ignores': [
                'pre',
                'textarea'
            ]
        }
    ],
    // 执行v-bind指令样式
    'vue/v-bind-style': 'off',
    // 执行 v-on 指令样式
    'vue/v-on-style': 'off',

    /**
     * Recommended
     */
    // 强制执行属性的顺序
    'vue/attributes-order': 'off',
    // 不允许使用v-html,防止XSS攻击
    'vue/no-v-html': 'error',
    // 强制组件中的属性顺序
    'vue/order-in-components': 'error',
    // 禁止this在模板中使用
    'vue/this-in-template': [
        'error',
        'never'
    ],

    /**
     * Uncategorized
     */
    'vue/array-bracket-spacing': 'off',
    'vue/arrow-spacing': 'off',
    'vue/block-spacing': 'off',
    'vue/brace-style': 'off',
    'vue/camelcase': 'off',
    'vue/comma-dangle': 'off',
    'vue/component-name-in-template-casing': 'off',
    'vue/dot-location': 'off',
    'vue/eqeqeq': 'off',
    'vue/key-spacing': 'off',
    'vue/keyword-spacing': 'off',
    'vue/match-component-file-name': 'off',
    'vue/no-boolean-default': 'off',
    'vue/no-deprecated-scope-attribute': 'off',
    'vue/no-empty-pattern': 'off',
    'vue/no-restricted-syntax': 'off',
    'vue/object-curly-spacing': 'off',
    'vue/require-direct-export': 'off',
    'vue/space-infix-ops': 'off',
    'vue/space-unary-ops': 'off',
    'vue/v-on-function-call': 'off',
    'vue/v-slot-style': 'off',
    'vue/valid-v-slot': 'off'
  }
}
