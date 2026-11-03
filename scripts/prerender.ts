import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { createServer } from "vite";

import type { FetchJson } from "../api/client";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const template = readFileSync(resolve(dist, "index.html"), "utf8");

if (
  !template.includes("<!--app-head-->") ||
  !template.includes("<!--app-html-->")
) {
  throw new Error("index.html is missing <!--app-head--> or <!--app-html-->");
}

const fetchJson: FetchJson = async (file) =>
  JSON.parse(readFileSync(resolve(root, "public/api", file), "utf8"));

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  const { routes, render, loadSiteData, htmlFile, canonicalUrl } =
    (await vite.ssrLoadModule(
      "/pages/entry-server.tsx",
    )) as typeof import("../pages/entry-server");
  const data = await loadSiteData(fetchJson);
  const urls = Object.keys(routes);

  for (const url of urls) {
    const { head, html } = render(url, data);
    const file = htmlFile(url);

    writeFileSync(
      resolve(dist, file),
      template
        .replace("<!--app-head-->", head)
        .replace("<!--app-html-->", html),
    );
    console.log(`Pre-rendered ${url} → ${file}`);
  }

  writeFileSync(
    resolve(dist, "sitemap.xml"),
    [
      `<?xml version="1.0" encoding="UTF-8"?>`,
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
      ...urls.map((url) => `  <url><loc>${canonicalUrl(url)}</loc></url>`),
      `</urlset>`,
      "",
    ].join("\n"),
  );
  console.log("Wrote sitemap.xml");
} finally {
  await vite.close();
}
