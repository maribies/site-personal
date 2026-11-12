import text from "../text.module.css";
import css from "./notfound.module.css";

export const NotFound = () => {
  return (
    <div className={css.notfound}>
      <img
        src="/static/SVG/logo.svg"
        alt="clever creative coder"
        width="160"
        height="160"
      />
      <h1 className={`${text.title} ${text.outline}`}>404</h1>
      <p>Oops! Nothing to see here at this time.</p>
      <a href="/">Go to the home page?</a>
    </div>
  );
};
