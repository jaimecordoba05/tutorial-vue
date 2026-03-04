/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],

  overrides: [
    // Archivos de config (Node / CommonJS)
    {
      files: [
        "cypress.config.js",
        ".eslintrc.js",
        "vite.config.*",
        "*.config.js",
      ],
      env: { node: true },
    },

    // Cypress (e2e + support + cualquier cosa dentro de cypress/)
    {
      files: ["cypress/**/*.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended", "plugin:vue/vue3-recommended"],
      env: { "cypress/globals": true },
      rules: {
        "cypress/no-unnecessary-waiting": "off",
      },
    },
  ],

  parserOptions: {
    ecmaVersion: "latest",
  },

  rules: {
    "vue/no-unused-vars": "error",
  },
};
