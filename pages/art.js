import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Layout from '../src/components/partials/layout';
import ArtGallery from '../src/components/art-gallery';

const Art = ({ artPosts }) => {
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
        <h1 className="my-8 text-3xl text-center text-custom-violet">All Digital Paintings</h1>
        <ArtGallery artPosts={artPosts} />
      </Layout>
    </>
  );
};

Art.propTypes = {
  artPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps() {
  const artQuery = encodeURIComponent(`*[ _type == "art" ] | order(_createdAt desc)`);

  const artUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${artQuery}`;

  const artResult = await fetch(artUrl).then((res) => res.json());

  return {
    props: {
      artPosts: artResult.result || [],
    },
  };
}

export default Art;
