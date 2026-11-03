import type { ComponentType } from "react";

import type { SiteData } from "../api/schemas";
import { ExperiencesPage } from "./ExperiencesPage";
import { HomePage } from "./HomePage";

export type PageProps = { data: SiteData };

// id of the <script type="application/json"> holding a pre-rendered page's
// data, written by entry-server and read by entry-client to hydrate.
export const DATA_ELEMENT_ID = "site-data";

export type Route = {
  title: string;
  Page: ComponentType<PageProps>;
};

// URL path → page. Each route is pre-rendered to its own HTML file.
export const routes: Record<string, Route> = {
  "/": { title: "Marissa Biesecker 🦄", Page: HomePage },
  "/experiences": { title: "Marissa Biesecker 🦄", Page: ExperiencesPage },
};

// The pre-rendered file for a route: "/" → "index.html", "/experiences" → "experiences.html".
export const htmlFile = (url: string) =>
  url === "/" ? "index.html" : `${url.slice(1)}.html`;
