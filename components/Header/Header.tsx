import { useEffect, useRef, useState } from "react";

import css from "./header.module.css";

export type NavLink = { href: string; label: string; color: string };

export const Header = ({
  links = [],
  logoWhenStuck = false,
}: {
  links?: NavLink[];
  /** Hide the logo until the header sticks to the top of the viewport. */
  logoWhenStuck?: boolean;
}) => {
  const inPageLinks = links.filter(({ href }) => href.startsWith("#"));
  const pageLinks = links.filter(({ href }) => !href.startsWith("#"));
  const ref = useRef<HTMLElement>(null);
  const [isStuck, setStuck] = useState(false);

  useEffect(() => {
    if (!logoWhenStuck || !ref.current) return;
    // With top: -1px, a stuck header is clipped by 1px, so it drops below
    // full visibility exactly when it sticks.
    const observer = new IntersectionObserver(
      ([entry]) => setStuck(entry.boundingClientRect.top < 0),
      { threshold: 1 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [logoWhenStuck]);

  return (
    <header
      ref={ref}
      className={`${css.header} ${logoWhenStuck ? css["logo-when-stuck"] : ""}`}
      data-stuck={isStuck}
    >
      <a href="/" className={css.logo}>
        <img
          src="/static/SVG/logo.svg"
          alt="Home of clever creative coder"
          width="48"
          height="48"
        />
      </a>
      {links.length > 0 && (
        <nav className={css["nav-box"]}>
          {[inPageLinks, pageLinks]
            .filter((group) => group.length > 0)
            .map((group) => (
              <div key={group[0].href} className={css["nav-row"]}>
                {group.map(({ href, label, color }) => (
                  <a
                    key={href}
                    href={href}
                    className={css.nav}
                    style={{ "--nav-color": color }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            ))}
        </nav>
      )}
    </header>
  );
};
