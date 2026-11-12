import type { Experience as ExperienceData } from "../../lib/schemas";
import css from "./experiences.module.css";
import text from "../text.module.css";
import { UnorderedListComponent as List } from "../List";
import { Keywords } from "./Keywords";
import { Collapsible } from "./Collapsible";

export const Experience = ({ experience }: { experience: ExperienceData }) => {
  return (
    <article className={css.container}>
      <div className={css.name}>
        <a href={experience.link} className={css.link}>
          <img
            src={experience.icon}
            alt={experience.iconAlt}
            className={css.logo}
          />
          <h3 className={css.tight}>{experience.title}</h3>
        </a>
        <p className={css.summary}>{experience.summary}</p>
      </div>

      <div className={css.details}>
        <p className={`${css.tight} ${css.italic}`}>{experience.timeFrame}</p>
        {experience?.location && (
          <p className={css.tight}>{experience.location}</p>
        )}
      </div>

      <h4 className={`${text.outline} ${css.tight}`}>{experience.role}</h4>
      <p>{experience.roleSummary}</p>
      <Keywords keywords={experience.keywords} />

      <Collapsible label="Highlights:">
        <List listData={experience.skills} />
      </Collapsible>
    </article>
  );
};
