import { useState } from 'react'

import text from '../text.module.css'
import css from './hero.module.css'
import { InfoBubble } from '../InfoBubble'
import { SoccerBallAnimation } from './SoccerBallAnimation'

export const Hero = () => {
  const [isExplainLinkClicked, setExplainLinkClicked] = useState(false);

  return <>
    <div className="flex-wrap">
      <div className="flex-wrap"><h1 className={text.title}>Mari</h1><h1 className={`${text.title} ${text.outline} ${text.colorChange}`}>ssa</h1></div>
      <div className="flex-wrap"><h1 className={text.title}>Bies</h1><h1 className={`${text.title} ${text.outline} ${text.colorChange}`}>ecker</h1></div>
    </div>

    <a href="#info" className={css.navLink} style={{ '--nav-color': `var(--purple)` }}>Info</a>
    <a href="#work" className={css.navLink} style={{ '--nav-color': `var(--blue)` }}>Work</a>
    <a href="#connect" className={css.navLink} style={{ '--nav-color': `var(--yellow)` }}>Connect</a>

    <h2>Creative Problem Solver</h2>
    <h4>with experience through the entire product lifecycle- where business, design, user experience, and technology intersect.</h4>
    
    <div className={css.explain}>
      <button onClick={() => setExplainLinkClicked(!isExplainLinkClicked)} className={css.explainButton} data-active={isExplainLinkClicked}>
        <h3 className={text.outline} style={{marginBottom: 0}}>aka Utility Player</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" className="icon fill pointer">
          <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1a87.983 87.983 0 0 0-40.4 74v1.5c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128h-32C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
        </svg>
      </button>
      <div className={css.balls}>
        <SoccerBallAnimation isActive={isExplainLinkClicked} />
      </div>
    </div>
    
    <InfoBubble showInfo={isExplainLinkClicked}>
      <p style={{"position": "relative", "zIndex": 1}}>
        This title was given to me by one of my youth soccer coaches for my ability to play any position on the pitch, but excelling in defense. I have applied a similar strategy to my career talents, being proficient at technologies across the stacks and Web3, but shining on the client side.
      </p>
    </InfoBubble>
  </>
}