import { Experiences, Header, Journey, Layout } from "../components";
import type { NavLink } from "../components";
import type { PageProps } from "./routes";

const navLinks: NavLink[] = [
  { href: "#projects", label: "Projects", color: "var(--orange)" },
  { href: "#work", label: "Work", color: "var(--yellow)" },
  { href: "#business", label: "Business", color: "var(--blue)" },
  { href: "#education", label: "Education", color: "var(--purple)" },
];

export const ExperiencesPage = ({ data }: PageProps) => (
  <Layout>
    <Header links={navLinks} />
    <Journey />
    <Experiences experiences={data.experiences} />
  </Layout>
);
