import Head from 'next/head';
import Layout from '../src/components/partials/layout';
// import ComicsGallery from '../src/components/comics-gallery';
import HomeBanner from '../src/components/partials/home-banner';

const Comics = () => {
  return (
    <>
      <Head>
        <meta name="twitter:title" content="Comics | Tandem Comics" />
        <meta property="og:title" content="Comics | Tandem Comics" />
        <meta property="twitter:site" content="Comics | Tandem Comics" />
        <meta property="og:url" content="www.tandemcomics.com/comics" />
      </Head>

      <Layout style={{ minHeight: '60vh' }}>
        {/* <h1 className="text-6xl">Comics</h1> */}
        <HomeBanner />
        {/* <ComicsGallery /> */}
      </Layout>
    </>
  );
};

export default Comics;
