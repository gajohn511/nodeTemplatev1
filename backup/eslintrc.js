module.exports = {
    root: true,
    env: {
        commonjs: true,
        node: true,
        browser: true,
        es6: true,
        jest: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            modules: true
        }
    },
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"]
};
