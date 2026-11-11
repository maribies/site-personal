import css from "./icon.module.css";

export type IconName = "credential" | "globe" | "laptop" | "office";

export const Icon = ({
  name,
  size,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) => (
  <span
    aria-hidden
    className={className ? `${css.icon} ${className}` : css.icon}
    style={{
      "--icon-src": `url("/static/SVG/icons/${name}.svg")`,
      ...(size && { "--icon-size": `${size}px` }),
    }}
  />
);
