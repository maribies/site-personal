import type { ExperienceDetailsCategory } from "../api/schemas";
import { Experiences, Header, Layout } from "../components";
import type { PageProps } from "./routes";
import css from "./experiences.module.css";

const navColors: Record<ExperienceDetailsCategory, string> = {
  projects: "var(--orange)",
  work: "var(--yellow)",
  business: "var(--blue)",
  education: "var(--purple)",
};

export const ExperiencesPage = ({ data }: PageProps) => (
  <Layout>
    <Header>
      <div className={css["nav-box"]}>
        {Object.entries(navColors).map(([category, color]) => (
          <a
            key={category}
            href={`#${category}`}
            className={css.nav}
            style={{ "--nav-color": color }}
          >
            {category}
          </a>
        ))}
      </div>
    </Header>
    <Experiences experiences={data.experiences} />
  </Layout>
);
