import type { InfoCopy } from "../../lib/schemas";
import css from "./info.module.css";

export const Info = ({ copy }: { copy: InfoCopy }) => {
  return (
    <div className={css.section} id="info">
      <h4 style={{ marginBottom: 0 }}>{copy.title}</h4>
      <div className={css.container}>
        <div style={{ marginBottom: "1em" }}>
          {/* TODO: Resurrect and implement the travel map and link to it. */}
          <p>{copy.summary}</p>
        </div>
        {/* TODO: Make clickable and flip to reveal a fun fact */}
        <div className={`${css.frame} icon cycle-background`}>
          <img
            alt="portrait of me"
            className={css.image}
            src="/static/images/me.jpeg"
          />
        </div>
      </div>
    </div>
  );
};
