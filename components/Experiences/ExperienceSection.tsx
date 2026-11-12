import type {
  ExperienceDetails,
  ExperienceDetailsCategory,
} from "../../lib/schemas";
import { ExperienceSummary } from "./ExperienceSummary";
import css from "./experiences.module.css";

export const ExperienceSection = ({
  experiences,
  category,
}: {
  experiences: ExperienceDetails[];
  category: ExperienceDetailsCategory;
}) => {
  const exp = experiences.find((experience) => experience.type === category);

  if (!exp) {
    return null;
  }

  return (
    <div id={category} className={`${css.section} ${css[category]}`}>
      <a href={`/experiences#${category}`} className={css.more}>
        <h2 className={css.title}>{category}</h2>
        {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="16"
          height="16"
          className="icon cycle-fill pointer"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </a>

      <div className={css.columns}>
        {exp.experiences.slice(0, 3).map((exp) => {
          return <ExperienceSummary experience={exp} key={exp.title} />;
        })}
      </div>
    </div>
  );
};
