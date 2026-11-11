import type { ReactNode } from "react";

export const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <header style={{ margin: "var(--space-m) 0" }}>
      <a href="/">
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
