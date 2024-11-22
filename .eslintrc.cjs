module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'esnext', // 最新 ECMAScript 特性
      sourceType: 'module', // 使用 ES 模块
    },
    env: {
      node: true,
      es6: true,
    },
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended', // 使用 TypeScript 推荐规则
      'plugin:prettier/recommended', // 启用 eslint-plugin-prettier，显示 Prettier 错误
    ],
    rules: {
      // 自定义规则
    },
  };