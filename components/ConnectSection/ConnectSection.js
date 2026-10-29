import text from '../text.module.css'
import css from './connectSection.module.css'

import { Links } from '../../api/Links'

export const ConnectSection = () => {
  return (
    <div id='connect' className={css.section}>
      <h2 className={text.outline}>Connect</h2>

      <div className="flex-wrap" style={{ justifyContent: 'end', flexGrow: 2 }}>
        {Links.map((item, index) => {
          return (
            <a key={index} href={item.link} target="_blank" className={`${css.link} flex-wrap`} >
              <span className={item.icon} style={{paddingRight: '0.5rem'}} />
              <p style={{paddingRight: '0.5rem'}}>{item.name}</p>
            </a>
          )
        })}
      </div>    </div>
  )
}
