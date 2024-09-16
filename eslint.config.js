import js from "@eslint/js";
import react from "eslint-plugin-react";
// import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // React
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
      },
    },
    ...react.configs.flat.recommended,
    ...react.configs.flat["jsx-runtime"],
    // ...reactHooks.flatConfigs.recommended,
  },

  {
    ignores: ["public/build/*"],
  },
];
