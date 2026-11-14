import { Icon } from "../Icon";
import text from "../text.module.css";
import css from "./connectSection.module.css";

import type { ContactLink } from "../../lib/schemas";

export const ConnectSection = ({ links }: { links: ContactLink[] }) => {
  return (
    <div id="connect" className={css.section}>
      <h2 className={text.outline}>Connect</h2>
      <div className="flex-wrap" style={{ justifyContent: "end", flexGrow: 2 }}>
        {links.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={`${css.link} flex-wrap`}
            >
              <Icon name={item.icon} className={css.icon} />
              <p>{item.name}</p>
            </a>
          );
        })}
      </div>{" "}
    </div>
  );
};
