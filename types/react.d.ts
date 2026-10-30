import "react";

declare module "react" {
  // Allow CSS custom properties in inline styles, e.g. style={{ "--nav-color": "var(--purple)" }}
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}
