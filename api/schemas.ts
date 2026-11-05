import { z } from "zod";

const experienceSchema = z.object({
  icon: z.string(),
  iconAlt: z.string(),
  title: z.string(), // i.e. company or project name
  role: z.string(),
  roleSummary: z.string(),
  link: z.string(),
  summary: z.string(), // project or company mission
  timeFrame: z.string(),
  keywords: z.array(z.string()), // tools, skills, frameworks, buzzwords
  skills: z.array(z.string()),
});

const experienceDetailsSchema = z.object({
  type: z.enum(["work", "business"]),
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

export type Experience = z.infer<typeof experienceSchema>;
export type ExperienceDetails = z.infer<typeof experienceDetailsSchema>;
export type ContactLink = z.infer<typeof contactLinkSchema>;
export type SiteData = z.infer<typeof siteDataSchema>;
