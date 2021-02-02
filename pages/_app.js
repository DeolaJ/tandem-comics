/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Khand:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="tandem, tandemcomics, tandem comics, gospel about christianity, gospel comics, gospel, christian, christian comics, funny gospel, youth comics, funny christian, comics"
        />
        <meta
          name="description"
          content="Art and Comics about Christian living and the Gospel or Christ"
        />
        <meta name="twitter:image:src" content="www.tandemcomics.com/logo.png" />
        <meta property="twitter:creator" content="deo_joe" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Art and Comics about Christian living and the Gospel or Christ"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Tandem Comics" />
        <meta property="og:image" content="www.tandemcomics.com/logo.png" />
        <meta property="og:url" content="www.tandemcomics.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
