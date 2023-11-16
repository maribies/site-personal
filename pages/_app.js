import Head from 'next/head'

import '../Styles/styles.css'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Marissa Biesecker 🦄</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp
