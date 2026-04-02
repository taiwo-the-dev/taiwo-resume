import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
      <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/jquery.validate.js" strategy="beforeInteractive" />
      <Script src="/assets/js/typed.js" strategy="beforeInteractive" />
      <Script src="/assets/js/magnific-popup.js" strategy="beforeInteractive" />
      <Script
        src="/assets/js/imagesloaded.pkgd.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/isotope.pkgd.js" strategy="beforeInteractive" />
      <Script src="/assets/js/onepagenav.js" strategy="beforeInteractive" />
      <Script src="/assets/js/glitche-scripts.js" strategy="afterInteractive" />
    </>
  );
}
