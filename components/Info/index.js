import css from './info.module.css'

export const Info = () => {
  return (
    <div className={css.section} id="info">
      <h4 style={{ marginBottom: 0 }}>Hi! I'm Marissa, a full stack developer, currently working with <a href="https://redsquirrel.com/">Red Squirrel Technologies.</a></h4>
      <div className={css.container}>
        <div style={{ marginBottom: '1em' }}>
          <p>I'm also a core teammate for <a href="https://quickbeam.xyz/">Quickbeam</a>, a technical education platform.</p>
          <p style={{ display: 'inline' }}>Always keen for new experiences, I am frequently traveling and currently based in </p><p className={css.strike} style={{ '--strike-color': 'var(--purple)' }}>PA,</p><p className={css.strike} style={{ '--strike-color': 'var(--blue)' }}>DC,</p><p className={css.strike} style={{ '--strike-color': 'var(--yellow)' }}>New Zealand,</p><p style={{ display: 'inline' }}>Portugal.</p>
        </div>
        {/* TODO: Make clickable and flip to reveal a fun fact */}
        <div className={`${css.imageWrapper} icon background`}>
          <img className={css.image} src="../static/images/me.jpeg" />
        </div>
      </div>
    </div>
  )
}