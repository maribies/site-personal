import type { ExperienceDetails } from "../../api/schemas";
import { Experience } from "./Experience";

export const ExperienceSection = ({
  experiences: details,
}: {
  experiences: ExperienceDetails[];
}) => {
  const ExperiencesComponent = details.map((section, index) => {
    const { experiences, type } = section;

    return (
      <div id={type} key={index}>
        <div style={{ width: "100%" }}>
          <h1>{type?.toUpperCase()}</h1>
        </div>

        {experiences.map((experience, index) => {
          return <Experience experience={experience} key={index} />;
        })}
      </div>
    );
  });

  return ExperiencesComponent;
};
