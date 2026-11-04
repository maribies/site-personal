import type { ComponentType } from "react";

import type { SiteData } from "../api/schemas";
import { ExperiencesPage } from "./ExperiencesPage";
import { HomePage } from "./HomePage";
import { NotFoundPage } from "./NotFoundPage";

export type PageProps = { data: SiteData };

// id of the <script type="application/json"> holding a pre-rendered page's
// data, written by entry-server and read by entry-client to hydrate.
export const DATA_ELEMENT_ID = "site-data";

export const SITE_URL = "https://www.marissabiesecker.com";

export type Route = {
  title: string;
  description: string;
  Page: ComponentType<PageProps>;
};

// URL path → page. Each route is pre-rendered to its own HTML file.
export const routes: Record<string, Route> = {
  "/": {
    title: "Marissa Biesecker 🦄",
    description: "Website of Marissa, a fullstack engineer.",
    Page: HomePage,
  },
  "/experiences": {
    title: "Experiences | Marissa Biesecker",
    description: "Tech and business experiences of Marissa.",
    Page: ExperiencesPage,
  },
};

export const notFound: Route = {
  title: "Page not found | Marissa Biesecker",
  description: "Nothing to see here.",
  Page: NotFoundPage,
};

export const canonicalUrl = (url: string) => new URL(url, SITE_URL).href;

// The pre-rendered file for a route: "/" → "index.html", "/experiences" → "experiences.html".
export const htmlFile = (url: string) =>
  url === "/" ? "index.html" : `${url.slice(1)}.html`;
