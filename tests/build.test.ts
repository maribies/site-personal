// Checks the output of `npm run build` against the real API data.
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import type { SiteData } from "../api/schemas";
import { DATA_ELEMENT_ID, htmlFile, routes } from "../pages/routes";

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
const companies = data.experiences.flatMap((group) =>
  group.experiences.map((experience) => experience.company),
);

describe.each(Object.entries(routes))("dist for %s", (url, { title }) => {
  const html = read(resolve(dist, htmlFile(url)));

  it("has no unfilled placeholders", () => {
    expect(html).not.toContain("<!--app-head-->");
    expect(html).not.toContain("<!--app-html-->");
  });

  it("has the title, data and pre-rendered content", () => {
    expect(html).toContain(`<title>${title}</title>`);
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

describe("pre-rendered content", () => {
  it("renders every company on the experiences page", () => {
    const html = read(resolve(dist, htmlFile("/experiences")));

    for (const company of companies) {
      expect(html).toContain(`<h3>${company}</h3>`);
    }
  });
});

describe("bundle", () => {
  // Strings only found in the API data. Company names are left out because
  // page copy (e.g. Info) mentions some of them.
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
