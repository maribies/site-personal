import { useState } from "react";

import type { Experience as ExperienceData } from "../../api/schemas";
import css from "./experiences.module.css";
import text from "../text.module.css";
import { UnorderedListComponent as List } from "../List";
import { InfoBubble } from "../InfoBubble";
import { KeywordList } from "./Keywords";
import { ToggleIcon } from "./ToggleIcon";

export const ExperienceSummary = ({
  experience,
}: {
  experience: ExperienceData;
}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <div className={css.row}>
        <a href={experience.link}>
          <h3>{experience.title}</h3>
        </a>
        <button
          onClick={() => setShowInfo(!showInfo)}
          style={{ background: "transparent", border: "none" }}
          aria-label={showInfo ? "Hide skills" : "Show skills"}
        >
          <ToggleIcon isOpen={showInfo} size={48} />
        </button>
      </div>

      <p>{experience.summary}</p>
      <p className={text.outline}>{experience.role}</p>
      <p>{experience.roleSummary}</p>

      <InfoBubble showInfo={showInfo}>
        <List listData={experience.skills} />
      </InfoBubble>

      <div className={css.ticker}>
        <div
          className={css.scroller}
          style={{ "--ticker-length": experience.keywords.join(" · ").length }}
        >
          <KeywordList keywords={experience.keywords} className={css.looped} />
          <KeywordList
            keywords={experience.keywords}
            className={css.looped}
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
};
