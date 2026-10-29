import css from "./soccerBallAnimation.module.css";

const BALLS = [1, 2, 3];

export const SoccerBallAnimation = ({ isActive }) => {
  return (
    <div className={css.soccer} data-active={isActive}>
      {BALLS.map((n) => (
        <div key={n} className={`${css.arc} ${css[`arc${n}`]}`}>
          <i
            className={`${css.ball} ${css[`ball${n}`]} fa-solid fa-futbol fa-2xl`}
          />
        </div>
      ))}
    </div>
  );
};
