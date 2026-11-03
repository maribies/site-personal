import { ExperienceSection, Layout } from "../components";
import type { PageProps } from "./routes";

export const ExperiencesPage = ({ data }: PageProps) => (
  <Layout>
    <ExperienceSection experiences={data.experiences} />
  </Layout>
);
