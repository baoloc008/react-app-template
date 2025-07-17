import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import gitignore from "eslint-config-flat-gitignore";

export default tseslint.config([
  gitignore(),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "react-refresh/only-export-components": "off",
      "@stylistic/max-len": [
        "error",
        {
          code: 100,
          tabWidth: 2,
          ignorePattern: "className=.*",
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      "@stylistic/eol-last": ["error", "always"],
    },
  },
]);
