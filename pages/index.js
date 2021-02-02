import Head from 'next/head';
import Layout from '../src/components/partials/layout';
import HomeBanner from '../src/components/partials/home-banner';
// import HomeContent from '../src/components/home-content';

const Home = () => {
  return (
    <>
      <Head>
        <title>Tandem Comics</title>
        <meta name="twitter:title" content="Tandem Comics" />
        <meta property="og:title" content="Tandem Comics" />
        <meta property="og:url" content="www.tandemcomics.com" />
        <meta name="twitter:site" content="Tandem Comics" />
      </Head>

      <Layout>
        {/* <HomeContent /> */}
        <HomeBanner />
      </Layout>
    </>
  );
};

export default Home;
