import { renderToString } from "react-dom/server";

import type { SiteData } from "../api/schemas";
import { App } from "./App";
import { DATA_ELEMENT_ID, routes } from "./routes";

export { loadSiteData } from "../api/client";
export { htmlFile, routes } from "./routes";

const serialize = (data: SiteData) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

export const render = (url: string, data: SiteData) => {
  const { title, Page } = routes[url];

  return {
    head: [
      `<title>${title}</title>`,
      `<script type="application/json" id="${DATA_ELEMENT_ID}">${serialize(data)}</script>`,
    ].join("\n"),
    html: renderToString(
      <App>
        <Page data={data} />
      </App>,
    ),
  };
};
