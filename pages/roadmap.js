import Head from 'next/head';
import Layout from '../src/components/partials/layout';
import RoadmapInfo from '../src/components/roadmap-info';

const Roadmap = () => {
  return (
    <>
      <Head>
        <title>Roadmap | Tandem Comics</title>
        <meta name="twitter:title" content="Roadmap | Tandem Comics" />
        <meta property="og:title" content="Roadmap | Tandem Comics" />
        <meta property="twitter:site" content="Roadmap | Tandem Comics" />
        <meta property="og:url" content="www.tandemcomics.com/roadmap" />
      </Head>

      <Layout className="px-6 py-8 md:px-10" style={{ minHeight: '60vh' }}>
        <RoadmapInfo />
      </Layout>
    </>
  );
};

export default Roadmap;
