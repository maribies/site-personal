import { 
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef
} from "@react-spring/web"

import css from "./infobubble.module.css"

export const InfoBubble = ({ children, showInfo }) => {
  const springApi = useSpringRef();
  const { y, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { opacity: 0, height: "0%", y: 0, display: 'none' },
    to: {
      opacity: showInfo ? 1 : 0,
      height: showInfo ? "100%" : "0%",
      y: showInfo ? 0 : 20,
      display: showInfo ? 'block' : 'none',
    }
  });

  useChain(showInfo ? [springApi] : [springApi], [0, showInfo ? 0.1 : 0.6]);

  return (
     <animated.div $showInfo={showInfo} style={{ marginBottom: '1rem', ...rest }}>
      <div className={css.infoBubbleTail} />
      <div className={`${css.infoBubbleBody} icon borderBottom`}>
        <animated.div style={{ y }} children={children} />
      </div>
    </animated.div>
  )
}