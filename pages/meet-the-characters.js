import Head from 'next/head';
import Layout from '../src/components/partials/layout';
import HomeBanner from '../src/components/partials/home-banner';

const MeetTheCharacters = () => {
  return (
    <>
      <Head>
        <title>Meet The Characters | Tandem Comics</title>
        <meta name="twitter:title" content="Meet The Characters | Tandem Comics" />
        <meta property="og:title" content="Meet The Characters | Tandem Comics" />
        <meta property="twitter:site" content="Meet The Characters | Tandem Comics" />
        <meta property="og:url" content="www.tandemcomics.com/meet-the-characters" />
      </Head>

      <Layout style={{ minHeight: '60vh' }}>
        {/* <h1 className="text-6xl">Meet our Characters</h1> */}
        <HomeBanner />
      </Layout>
    </>
  );
};

export default MeetTheCharacters;
