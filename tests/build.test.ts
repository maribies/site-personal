// Checks the output of `npm run build` against the real API data.
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import type { SiteData } from "../api/schemas";
import {
  canonicalUrl,
  DATA_ELEMENT_ID,
  htmlFile,
  notFound,
  routes,
} from "../pages/routes";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");

if (!existsSync(dist)) {
  throw new Error("No build output. Run `npm run build` first.");
}

const read = (path: string) => readFileSync(path, "utf8");
const assets = readdirSync(resolve(dist, "assets"));
const js = assets
  .filter((file) => file.endsWith(".js"))
  .map((file) => read(resolve(dist, "assets", file)))
  .join("\n");
const css = assets
  .filter((file) => file.endsWith(".css"))
  .map((file) => read(resolve(dist, "assets", file)))
  .join("\n");

const api = (file: string) =>
  JSON.parse(read(resolve(root, "public/api", file)));
const data: SiteData = {
  experiences: api("experiences.json"),
  links: api("links.json"),
};
const titles = data.experiences.flatMap((group) =>
  group.experiences.map((experience) => experience.title),
);

describe.each(Object.entries(routes))("dist for %s", (url, route) => {
  const html = read(resolve(dist, htmlFile(url)));

  it("has no unfilled placeholders", () => {
    expect(html).not.toContain("<!--app-head-->");
    expect(html).not.toContain("<!--app-html-->");
  });

  it("has the title, meta tags, data and pre-rendered content", () => {
    expect(html).toContain(`<title>${route.title}</title>`);
    expect(html).toContain(
      `<meta property="og:title" content="${route.title}" />`,
    );
    expect(html).toContain(
      `<meta name="description" content="${route.description}" />`,
    );
    expect(html).toContain(
      `<link rel="canonical" href="${canonicalUrl(url)}" />`,
    );
    expect(html).toContain(`id="${DATA_ELEMENT_ID}"`);
    expect(html).toMatch(/<div id="root">.*<main>.+<\/main><\/div>/s);
  });

  it("only uses CSS module classes that exist in the CSS", () => {
    // Vite's CSS module class names contain "_"; global and Font Awesome
    // classes (e.g. "flex-wrap", "fa-brands") don't.
    const moduleClasses = [...html.matchAll(/class="([^"]*)"/g)]
      .flatMap(([, classes]) => classes.split(" "))
      .filter((name) => name.includes("_"));

    for (const name of new Set(moduleClasses)) {
      expect(css, `missing .${name}`).toContain(`.${name}`);
    }
  });
});

it("404.html has the pre-rendered not-found page", () => {
  const html = read(resolve(dist, "404.html"));

  expect(html).toContain(`<title>${notFound.title}</title>`);
  expect(html).toMatch(/<div id="root">.*<main>.+<\/main><\/div>/s);
});

it("sitemap.xml lists every route", () => {
  const sitemap = read(resolve(dist, "sitemap.xml"));

  for (const url of Object.keys(routes)) {
    expect(sitemap).toContain(`<loc>${canonicalUrl(url)}</loc>`);
  }
});

describe("pre-rendered content", () => {
  it("renders every experience on the experiences page", () => {
    const html = read(resolve(dist, htmlFile("/experiences")));

    for (const title of titles) {
      expect(html).toContain(`<h3>${title}</h3>`);
    }
  });
});

describe("bundle", () => {
  const apiStrings = [
    ...data.experiences.flatMap((group) =>
      group.experiences.flatMap(({ title, skills }) => [title, ...skills]),
    ),
    ...data.links.map(({ link }) => link),
  ];

  it("contains no API data", () => {
    // Compare the found strings, not the bundle, so a failure doesn't print it.
    expect(apiStrings.filter((text) => js.includes(text))).toEqual([]);
  });

  it("doesn't include Zod", () => {
    // Zod's schema classes are named with these strings, which survive minifying.
    expect(js.includes("$ZodType")).toBe(false);
  });
});
