import {
  ExperienceSection,
  Header,
  Hero,
  Info,
  Layout,
  ConnectSection,
} from "../components";
import type { NavLink } from "../components";
import text from "../components/text.module.css";
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
    <div className="flex-wrap">
      <div className="flex-wrap">
        <h1 className={text.title}>Mari</h1>
        <h1 className={`${text.title} ${text.outline} ${text.cycle}`}>ssa</h1>
      </div>
      <div className="flex-wrap">
        <h1 className={text.title}>Bies</h1>
        <h1 className={`${text.title} ${text.outline} ${text.cycle}`}>ecker</h1>
      </div>
    </div>
    <Header links={navLinks} logoWhenStuck />
    <Hero copy={data.copy.home.hero} />
    <Info copy={data.copy.home.info} />
    <ExperienceSection experiences={data.experiences} category="work" />
    <ExperienceSection experiences={data.experiences} category="projects" />
    <ConnectSection links={data.links} />
  </Layout>
);
