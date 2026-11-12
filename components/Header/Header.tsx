import type { ReactNode } from "react";

import css from "./header.module.css";

export const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <header className={css.header}>
      <a href="/" className={css.logo}>
        <img
          src="/static/SVG/logo.svg"
          alt="clever creative coder"
          width="48"
          height="48"
        />
      </a>
      {children}
    </header>
  );
};
