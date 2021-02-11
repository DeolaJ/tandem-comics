import React from 'react';
import Head from 'next/head';
import Layout from '../src/components/partials/layout';
import ArtGallery from '../src/components/art-gallery';

const Art = () => {
  return (
    <>
      <Head>
        <title>Art | Tandem Comics</title>
        <meta name="twitter:title" content="Art | Tandem Comics" />
        <meta property="og:title" content="Art | Tandem Comics" />
        <meta name="twitter:site" content="Art | Tandem Comics" />
        <meta property="og:url" content="www.tandemcomics.com/art" />
      </Head>

      <Layout className="px-4 py-4 md:px-8 md:py-8">
        <h1 className="mb-3 text-4xl">Art</h1>
        <ArtGallery />
      </Layout>
    </>
  );
};

export default Art;
