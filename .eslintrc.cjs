module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["warn", 4],
        "linebreak-style": "off",
        quotes: ["warn", "double"],
        semi: ["warn", "always"],
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off"
    }
};
