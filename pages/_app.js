import Head from 'next/head'
import { Poppins, Dela_Gothic_One } from 'next/font/google'

import '../Styles/styles.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '400'] })
const dela = Dela_Gothic_One({ subsets: ['latin'], weight: ['400'] })

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Marissa Biesecker 🦄</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <main className={`${dela.className} ${poppins.className}`}>
      <Component {...pageProps} />
    </main>
  </>
)

export default MyApp
