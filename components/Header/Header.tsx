import css from "./header.module.css";

export type NavLink = { href: string; label: string; color: string };

export const Header = ({ links = [] }: { links?: NavLink[] }) => {
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
      {links.length > 0 && (
        <nav className={css["nav-box"]}>
          {links.map(({ href, label, color }) => (
            <a
              key={href}
              href={href}
              className={css.nav}
              style={{ "--nav-color": color }}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
