import { useState } from "react";

import type { Experience as ExperienceData } from "../../api/Experiences";
import css from "./experiences.module.css";
import { UnorderedListComponent as List } from "../List";
import { InfoBubble } from "../InfoBubble";

export const Experience = ({ experience }: { experience: ExperienceData }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <div className={css.row}>
        <a href={experience.companyLink}>
          <h3>{experience.company}</h3>
        </a>
        <a onClick={() => setShowInfo(!showInfo)}>
          <svg
            className="icon cycle-fill pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="48"
            height="48"
          >
            {showInfo ? (
              <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
            ) : (
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            )}
          </svg>
        </a>
      </div>

      <p>{experience.title}</p>

      <InfoBubble showInfo={showInfo}>
        <List listData={experience.skills} />
      </InfoBubble>

      <div className={css.ticker}>
        <div className={css.scroller}>
          <div className={css.row}>
            {experience.tools &&
              experience.tools.map((tool) => (
                <p className={css.tool} key={tool}>
                  {tool}
                </p>
              ))}
            {experience.tools &&
              experience.tools.map((tool) => (
                <p className={css.tool} key={tool}>
                  {tool}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
