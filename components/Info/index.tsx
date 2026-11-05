import css from "./info.module.css";

export const Info = () => {
  return (
    <div className={css.section} id="info">
      <h4 style={{ marginBottom: 0 }}>
        Hi! I&apos;m Marissa. I am a product-minded, AI-tinkering, polyglot
        builder and lifelong learner.
      </h4>
      <div className={css.container}>
        <div style={{ marginBottom: "1em" }}>
          {/* TODO: Resurrect and implement the travel map and link to it. */}
          <p>
            I am also a former retail buyer, a futebol player, a marathon
            runner, and a digital nomad. I travel frequently: 36 countries and
            counting!
          </p>
        </div>
        {/* TODO: Make clickable and flip to reveal a fun fact */}
        <div className={`${css.frame} icon cycle-background`}>
          <img
            alt="portrait of me"
            className={css.image}
            src="/static/images/me.jpeg"
          />
        </div>
      </div>
    </div>
  );
};
