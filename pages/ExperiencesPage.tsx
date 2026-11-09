import { Experiences, Layout } from "../components";
import type { PageProps } from "./routes";

export const ExperiencesPage = ({ data }: PageProps) => (
  <Layout showHeader>
    <Experiences experiences={data.experiences} />
  </Layout>
);
