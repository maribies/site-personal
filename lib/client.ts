import { z } from "zod";

import { siteDataSchema, type SiteData } from "./schemas";

export type FetchJson = (file: string) => Promise<unknown>;

export const loadSiteData = async (fetchJson: FetchJson): Promise<SiteData> => {
  const [experiences, links, copy] = await Promise.all([
    fetchJson("experiences.json"),
    fetchJson("links.json"),
    fetchJson("copy.json"),
  ]);
  const result = siteDataSchema.safeParse({ experiences, links, copy });

  if (!result.success) {
    throw new Error(`Invalid API data:\n${z.prettifyError(result.error)}`);
  }

  return result.data;
};
