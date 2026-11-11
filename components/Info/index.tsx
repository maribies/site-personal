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
            runner, and a digital nomad. My path has not been a traditional one.
          </p>
          <p>
            Nor was it a straight line, and that&apos;s how my instincts came to
            be. Business school and buying taught me to see a business as a
            system, then design school taught me to start from the perspective
            of a user, to understand their wants and needs; consulting gave me
            the opportunity to practice both, and building payments at Flexa
            sharpened the systems side. I have learned to develop something
            people want and need and how to build it so the pieces hold
            together.
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
