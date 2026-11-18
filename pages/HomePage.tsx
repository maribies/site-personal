import {
  ExperienceSection,
  Header,
  Hero,
  Info,
  Layout,
  ConnectSection,
} from "../components";
import type { NavLink } from "../components";
import type { PageProps } from "./routes";

const navLinks: NavLink[] = [
  { href: "#info", label: "Info", color: "var(--purple)" },
  { href: "#work", label: "Work", color: "var(--yellow)" },
  { href: "#projects", label: "Projects", color: "var(--orange)" },
  { href: "#connect", label: "Connect", color: "var(--blue)" },
  { href: "/experiences", label: "Experiences", color: "var(--pink)" },
];

export const HomePage = ({ data }: PageProps) => (
  <Layout>
    <Header links={navLinks} />
    <Hero copy={data.copy.home.hero} />
    <Info copy={data.copy.home.info} />
    <ExperienceSection experiences={data.experiences} category="work" />
    <ExperienceSection experiences={data.experiences} category="projects" />
    <ConnectSection links={data.links} />
  </Layout>
);
