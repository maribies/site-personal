/** @type {import("stylelint").Config} */
const config = {
  extends: ["stylelint-config-standard"],
  ignoreFiles: ["out/**", ".next/**", "node_modules/**"],
};

export default config;
