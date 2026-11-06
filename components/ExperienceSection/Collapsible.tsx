import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { animated } from "@react-spring/web";

import css from "./experiences.module.css";
import { ToggleIcon } from "./ToggleIcon";
import { useReveal } from "../useReveal";

export const Collapsible = ({
  label,
  children,
}: {
  label: ReactNode;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const { container, clip, slide } = useReveal(isOpen, {
    onClosed: () => {
      if (detailsRef.current) detailsRef.current.open = false;
    },
  });

  const onSummaryClick = (event: MouseEvent) => {
    const details = detailsRef.current;
    if (!details) return;

    event.preventDefault();
    if (!isOpen) details.open = true;
    setIsOpen(!isOpen);
  };

  return (
    <details
      open
      ref={detailsRef}
      className={css.highlights}
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
    >
      <summary className={`${css.label} pointer`} onClick={onSummaryClick}>
        {label}
        <ToggleIcon isOpen={isOpen} size={16} />
      </summary>
      <animated.div style={container}>
        <animated.div style={clip}>
          <animated.div className={css.panel} style={slide}>
            {children}
          </animated.div>
        </animated.div>
      </animated.div>
    </details>
  );
};
