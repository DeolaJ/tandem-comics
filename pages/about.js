import Head from 'next/head';
import Layout from '../src/components/partials/layout';
import AboutInfo from '../src/components/about-info';

const About = () => {
  return (
    <>
      <Head>
        <title>About | Tandem Comics</title>
        <meta name="twitter:title" content="About | Tandem Comics" />
        <meta property="og:title" content="About | Tandem Comics" />
        <meta name="twitter:site" content="About | Tandem Comics" />
        <meta property="og:url" content="www.tandemcomics.com/about" />
      </Head>

      <Layout className="px-6 py-8 md:px-10" style={{ minHeight: '60vh' }}>
        <AboutInfo />
      </Layout>
    </>
  );
};

export default About;
