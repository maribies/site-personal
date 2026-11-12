import { expect, it } from "vitest";

import type { SiteData } from "../lib/schemas";
import { render } from "../pages/entry-server";
import { DATA_ELEMENT_ID } from "../pages/routes";
import { siteData } from "./fixtures";

it("embedded data can't close its <script> early", () => {
  const attack = "</script><script>alert(1)</script>";
  const data: SiteData = {
    ...siteData,
    links: [{ ...siteData.links[0], name: attack }],
  };
  const { head } = render("/", data);
  const embedded = head.match(
    new RegExp(`id="${DATA_ELEMENT_ID}">(.*?)</script>`, "s"),
  );

  // The only </script> in the head is the data script's own closing tag.
  expect(head.match(/<\/script>/g)).toHaveLength(1);
  expect(JSON.parse(embedded![1])).toEqual(data);
});
