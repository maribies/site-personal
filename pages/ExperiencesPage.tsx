import { ExperienceSection, Layout } from "../components";
import type { PageProps } from "./routes";

export const ExperiencesPage = ({ data }: PageProps) => (
  <Layout showHeader>
    <ExperienceSection experiences={data.experiences} />
  </Layout>
);
