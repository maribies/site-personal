import { createRoot, hydrateRoot } from "react-dom/client";

import "@fontsource/poppins/latin-100.css";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/dela-gothic-one/latin-400.css";
import "../styles/styles.css";

import type { SiteData } from "../api/schemas";
import { App } from "./App";
import { DATA_ELEMENT_ID, routes } from "./routes";

// "/index.html" → "/", "/experiences.html" → "/experiences"
const path = location.pathname.replace(/(\/index)?\.html$/, "") || "/";
const route = routes[path];

if (!route) {
  throw new Error(`No route for ${path}`);
}

const root = document.getElementById("root")!;
const app = (data: SiteData) => (
  <App>
    <route.Page data={data} />
  </App>
);

const embeddedData = document.getElementById(DATA_ELEMENT_ID)?.textContent;

if (embeddedData) {
  hydrateRoot(root, app(JSON.parse(embeddedData)));
} else if (import.meta.env.DEV) {
  import("../api/client").then(async ({ loadSiteData }) => {
    const data = await loadSiteData(async (file) =>
      (await fetch(`/api/${file}`)).json(),
    );

    document.title = route.title;
    createRoot(root).render(app(data));
  });
}
