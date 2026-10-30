import { Experiences } from "../../api/Experiences";

import css from "./work.module.css";
import { Experience } from "../ExperienceSection/Experience";

export const Work = () => {
  const tech = Experiences.find((experience) => experience.type === "tech");

  return (
    <div id="work" className={css.work}>
      <h2 className={css.title}>WORK</h2>

      <div className={css.columns}>
        {!!tech &&
          tech.experiences.slice(0, 3).map((exp) => {
            return <Experience experience={exp} key={exp.company} />;
          })}
        {/* TODO: Add clickable element to go to other projects/experiences */}
      </div>
    </div>
  );
};
