import type { ExperienceDetails } from "../../api/schemas";

import css from "./work.module.css";
import { Experience } from "../ExperienceSection/Experience";

export const Work = ({ experiences }: { experiences: ExperienceDetails[] }) => {
  const work = experiences.find((experience) => experience.type === "work");

  return (
    <div id="work" className={css.work}>
      <a href="/experiences" className={css.more}>
        <h2 className={css.title}>WORK</h2>
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
        {!!work &&
          work.experiences.slice(0, 3).map((exp) => {
            return <Experience experience={exp} key={exp.title} />;
          })}
      </div>
    </div>
  );
};
