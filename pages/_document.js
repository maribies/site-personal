import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet='utf-8' />
        <link rel='apple-touch-icon' sizes='180x180' href='../../static/SVG/cursors/code.svg' />
        <link rel='icon' type='image/png' sizes='32x32' href='../../static/SVG/cursors/code.svg' />
        <link rel='icon' type='image/png' sizes='16x16' href='../../static/SVG/cursors/code.svg' />
        <link rel='manifest' href='../../static/images/favicon/site.webmanifest' />
        <link rel='mask-icon' href='.../../static/images/favicon/safari-pinned-tab.svg' color='#5f4b8b' />
        <meta name='msapplication-TileColor' content='#5f4b8b' />
        <meta name='theme-color' content='#5f4b8b' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' />
        <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Poppins:wght@100;400&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}