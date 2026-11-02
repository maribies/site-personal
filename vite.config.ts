import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// Replaces <!--shared-head--> in each page's HTML with partials/head.html.
const sharedHead = (): Plugin => ({
  name: "shared-head",
  transformIndexHtml: {
    order: "pre",
    handler: (html) =>
      html.replace(
        "<!--shared-head-->",
        readFileSync(
          resolve(import.meta.dirname, "partials/head.html"),
          "utf8",
        ),
      ),
  },
});

export default defineConfig({
  appType: "mpa",
  plugins: [sharedHead(), react()],
  build: {
    rolldownOptions: {
      input: {
        index: resolve(import.meta.dirname, "index.html"),
        experiences: resolve(import.meta.dirname, "experiences.html"),
      },
    },
  },
});
