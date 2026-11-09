import { expect, it } from "vitest";

import { loadSiteData } from "../api/client";
import { siteData } from "./fixtures";

it("rejects invalid API data with the path to each problem", async () => {
  const [one, two] = siteData.experiences;
  const responses: Record<string, unknown> = {
    "experiences.json": [
      { ...one, experiences: [{ ...one.experiences[0], title: 1 }] },
      { ...two, type: "hobby" },
    ],
    "links.json": siteData.links,
  };

  const result = loadSiteData(async (file) => responses[file]);

  await expect(result).rejects.toThrow("experiences[0].experiences[0].title");
  await expect(result).rejects.toThrow("experiences[1].type");
});
