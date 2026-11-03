import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ isPreview }) => ({
  // Dev serves index.html for every route and the client picks the page.
  // Preview serves the pre-rendered files, so unknown paths 404 like a static host.
  appType: isPreview ? "mpa" : "spa",
  plugins: [react()],
}));
