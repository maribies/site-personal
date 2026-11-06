import type { ReactNode } from "react";
import { animated } from "@react-spring/web";

import css from "./infobubble.module.css";
import { useReveal } from "../useReveal";

export const InfoBubble = ({
  children,
  showInfo,
}: {
  children: ReactNode;
  showInfo: boolean;
}) => {
  const { progress, container, clip, slide } = useReveal(showInfo);

  return (
    <animated.div
      style={{
        ...container,
        marginBottom: progress.to((p) => `${Math.max(p, 0)}rem`),
      }}
    >
      <animated.div style={clip}>
        <div className={css.tail} />
        <div className={`${css.body} icon cycle-border`}>
          <animated.div style={slide}>{children}</animated.div>
        </div>
      </animated.div>
    </animated.div>
  );
};
