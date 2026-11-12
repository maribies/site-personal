import type { ExperienceDetails } from "../../api/schemas";
import { Experience } from "./Experience";
import css from "./experiences.module.css";

export const Experiences = ({
  experiences: details,
}: {
  experiences: ExperienceDetails[];
}) => {
  const ExperiencesComponent = details.map((section, index) => {
    const { experiences, type } = section;

    return (
      <div id={type} key={index} className={css.category}>
        <div style={{ width: "100%" }}>
          <h2 className={css.uppercase}>{type}</h2>
        </div>

        {experiences.map((experience, index) => {
          return <Experience experience={experience} key={index} />;
        })}
      </div>
    );
  });

  return ExperiencesComponent;
};
