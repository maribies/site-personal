import { renderToString } from "react-dom/server";

import type { SiteData } from "../lib/schemas";
import { App } from "./App";
import { canonicalUrl, DATA_ELEMENT_ID, notFound, routes } from "./routes";

export { loadSiteData } from "../lib/client";
export { canonicalUrl, htmlFile, routes } from "./routes";

const serialize = (data: SiteData) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

// Titles and descriptions are inserted as-is, so they can't contain double quotes.
export const render = (url: string, data: SiteData) => {
  const { title, description, Page } = routes[url] ?? notFound;
  const canonical = canonicalUrl(url);

  return {
    head: `<title>${title}</title>
<meta name="description" content="${description}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:url" content="${canonical}" />
<link rel="canonical" href="${canonical}" />
<script type="application/json" id="${DATA_ELEMENT_ID}">${serialize(data)}</script>`,
    html: renderToString(
      <App>
        <Page data={data} />
      </App>,
    ),
  };
};
