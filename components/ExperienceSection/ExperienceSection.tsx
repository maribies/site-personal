import { Experiences } from "../../api/Experiences";
import { Experience } from "./Experience";

export const ExperienceSection = () => {
  const ExperiencesComponent = Experiences.map((section, index) => {
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
