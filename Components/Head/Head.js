import Head from 'next/head';

export const NextHead = () => {
  return (
    <Head>
        <title>{'Marissa Biesecker 🦄'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="../../static/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../../static/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../../static/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="../../static/images/favicon/site.webmanifest" />
        <link rel="mask-icon" href=".../../static/images/favicon/safari-pinned-tab.svg" color="#5f4b8b" />
        <meta name="msapplication-TileColor" content="#5f4b8b" />
        <meta name="theme-color" content="#5f4b8b" />
      </Head>
  );
}
