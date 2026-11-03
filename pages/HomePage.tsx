import { Hero, Info, Work, Layout, ConnectSection } from "../components";
import type { PageProps } from "./routes";

export const HomePage = ({ data }: PageProps) => (
  <Layout>
    <Hero />
    <Info />
    <Work experiences={data.experiences} />
    <ConnectSection links={data.links} />
  </Layout>
);
