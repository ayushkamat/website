module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jsdoc/recommended",

    "plugin:unicorn/recommended",

    "plugin:array-func/recommended",
    "plugin:import/recommended",
    "plugin:no-use-extend-native/recommended",
    "plugin:promise/recommended",
    "plugin:regexp/recommended",
    "plugin:optimize-regex/recommended",
  ],
  rules: {
    "react/jsx-curly-brace-presence": "error",
    "react/void-dom-elements-no-children": "error",
    "react/self-closing-comp": "error",
    // todo(maximsmol): not found for some reason
    // "react/no-object-type-as-default-prop": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-bind": "error",
    "react/jsx-fragments": "error",
    "react/jsx-boolean-value": "error",
    "react/iframe-missing-sandbox": "error",
    "react/hook-use-state": "warn",

    "array-func/prefer-array-from": "off",
    "regexp/strict": "off",
    "jsdoc/require-jsdoc": "off",

    "unicorn/no-negated-condition": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/consistent-destructuring": "off",
    "unicorn/consistent-function-scoping": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prefer-switch": "off",
    "unicorn/prefer-query-selector": "off",
    "unicorn/no-useless-undefined": ["error", { checkArguments: false }],
    "unicorn/prefer-ternary": "off",
    "unicorn/prefer-dom-node-text-content": "off",
    "unicorn/no-null": "off", // in a better world
    "unicorn/no-array-callback-reference": "off",
    "unicorn/escape-case": "off",
    "unicorn/no-await-expression-member": "off",

    "no-constructor-bind/no-constructor-bind": "error",
    "no-constructor-bind/no-constructor-state": "error",

    eqeqeq: ["error", "always", { null: "ignore" }],
    "promise/always-return": "off",

    "jsdoc/require-param-type": "off",
    "jsdoc/require-returns-type": "off",

    // todo(maximsmol): figure out why this slows eslint down so much
    // "import/namespace": "off",
  },
  plugins: ["no-constructor-bind"],
  overrides: [
    {
      files: ["src/**/*"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/strict",
        "prettier",
      ],
      rules: {
        "react-hooks/exhaustive-deps": [
          "warn",
          {
            additionalHooks: "(useCallbackMultiple|useAsyncEffect)",
          },
        ],

        "jsx-a11y/click-events-have-key-events": "warn",
        "jsx-a11y/no-static-element-interactions": "warn",
      },
      // parserOptions: {
      //   project: "./src/tsconfig.json",
      // },
      env: {
        browser: true,
      },
      settings: {
        "import/resolver": {
          typescript: true,
        },
      },
    },
    {
      files: ["webpack.config.ts"],
      extends: [
        "plugin:import/typescript",
        "plugin:node/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "unicorn/prefer-module": "off",
        "node/no-unsupported-features/es-syntax": "off",
        "node/no-unpublished-import": "off",
      },
      settings: {
        "import/resolver": {
          typescript: true,
          node: true,
        },
      },
    },
    {
      files: [".eslintrc.js"],
      extends: ["plugin:node/recommended", "prettier"],
      env: {
        node: true,
      },
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
    {
      files: ["*.html"],
      plugins: ["@html-eslint"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended"],
      rules: {
        // prettier
        "@html-eslint/element-newline": "off",
        "@html-eslint/indent": "off",
        "@html-eslint/no-extra-spacing-attrs": "off",
        "@html-eslint/require-closing-tags": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["src/css/roboto-mono/**/*", "src/gql/**/*"],
};
