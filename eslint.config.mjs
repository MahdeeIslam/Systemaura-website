import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // The type-aware `no-unused-expressions` rule fails to initialise on
      // Node < 20.9 (Next 15.5's recommended engine). Disabling just this rule
      // keeps the rest of the lint pass working on older Node versions.
      // Safe to remove once running on Node >= 20.9.
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
