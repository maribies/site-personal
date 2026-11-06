import { useSpring, config } from "@react-spring/web";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Shared open/close motion: one 0→1 spring drives fade, height, and slide so
// they move together. Spread `container` on the outer animated element, `clip`
// on its single child, and `slide` on the content.
export const useReveal = (
  isOpen: boolean,
  { onClosed }: { onClosed?: () => void } = {},
) => {
  const { progress } = useSpring({
    config: config.stiff,
    immediate: prefersReducedMotion,
    progress: isOpen ? 1 : 0,
    onRest: ({ value }) => {
      if (value.progress === 0) onClosed?.();
    },
  });

  return {
    progress,
    container: {
      opacity: progress,
      gridTemplateRows: progress.to((p) => `${Math.max(p, 0)}fr`),
      display: progress.to((p) => (p === 0 ? "none" : "grid")),
    },
    clip: {
      minHeight: 0,
      overflow: progress.to((p) => (p < 1 ? "hidden" : "visible")),
    },
    slide: {
      y: progress.to((p) => (1 - p) * 20),
    },
  };
};
