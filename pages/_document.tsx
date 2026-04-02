import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <link
          href="../../../fonts.googleapis.com/css99f1.css?family=Roboto+Mono:400,100,300italic,300,100italic,400italic,500,500italic,700,700italic&amp;subset=latin,cyrillic"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/assets/css/glitche-basic.css" />
        <link rel="stylesheet" href="/assets/css/ionicons.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
        <link rel="stylesheet" href="/assets/css/skills.css" />
        <link rel="stylesheet" href="/assets/css/dark.css" />

        <link rel="icon" type="image/svg+xml" href="/assets/images/favicons/siteicon-t.svg" />
        <link rel="shortcut icon" href="/assets/images/favicons/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
