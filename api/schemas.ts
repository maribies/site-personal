import { z } from "zod";

const previewSchema = z.object({
  path: z.string(),
  type: z.enum(["site", "video"]),
});

const experienceSchema = z.object({
  icon: z.string(),
  iconAlt: z.string(),
  title: z.string(),
  company: z.string(),
  companyLink: z.string(),
  timeFrame: z.string(),
  tools: z.array(z.string()).optional(),
  skills: z.array(z.string()),
  links: z.object({
    main: previewSchema,
    second: previewSchema.optional(),
    third: previewSchema.optional(),
  }),
});

const experienceDetailsSchema = z.object({
  type: z.enum(["tech", "business"]),
  experiences: z.array(experienceSchema),
});

const contactLinkSchema = z.object({
  link: z.string(),
  icon: z.string(),
  name: z.string(),
});

export const siteDataSchema = z.object({
  experiences: z.array(experienceDetailsSchema),
  links: z.array(contactLinkSchema),
});

export type Preview = z.infer<typeof previewSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type ExperienceDetails = z.infer<typeof experienceDetailsSchema>;
export type ContactLink = z.infer<typeof contactLinkSchema>;
export type SiteData = z.infer<typeof siteDataSchema>;
