import {
  ExperienceSection,
  Hero,
  Info,
  Layout,
  ConnectSection,
} from "../components";
import type { PageProps } from "./routes";

export const HomePage = ({ data }: PageProps) => (
  <Layout>
    <Hero />
    <Info />
    <ExperienceSection experiences={data.experiences} category="work" />
    <ExperienceSection experiences={data.experiences} category="projects" />
    <ConnectSection links={data.links} />
  </Layout>
);
