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
  location: z.string().optional(),
});

const experienceDetailsCategorySchema = z.enum([
  "work",
  "business",
  "projects",
  "education",
]);

const experienceDetailsSchema = z.object({
  type: experienceDetailsCategorySchema,
  experiences: z.array(experienceSchema),
});

const contactLinkSchema = z.object({
  link: z.string(),
  icon: z.string(),
  name: z.string(),
});

const heroCopySchema = z.object({
  role: z.string(),
  summary: z.string(),
  aka: z.object({ title: z.string(), body: z.string() }),
});

const infoCopySchema = z.object({
  title: z.string(),
  summary: z.string(),
});

const copySchema = z.object({
  home: z.object({ hero: heroCopySchema, info: infoCopySchema }),
});

export const siteDataSchema = z.object({
  experiences: z.array(experienceDetailsSchema),
  links: z.array(contactLinkSchema),
  copy: copySchema,
});

export type Experience = z.infer<typeof experienceSchema>;
export type ExperienceDetails = z.infer<typeof experienceDetailsSchema>;
export type ExperienceDetailsCategory = z.infer<
  typeof experienceDetailsCategorySchema
>;
export type ContactLink = z.infer<typeof contactLinkSchema>;
export type HeroCopy = z.infer<typeof heroCopySchema>;
export type InfoCopy = z.infer<typeof infoCopySchema>;
export type SiteData = z.infer<typeof siteDataSchema>;
