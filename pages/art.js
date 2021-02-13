import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { createClient } from 'contentful';
import Layout from '../src/components/partials/layout';
import ArtGallery from '../src/components/art-gallery';

const Art = ({ images }) => {
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
        <ArtGallery images={images} />
      </Layout>
    </>
  );
};

Art.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // Fetch all entries of content_type `blogPost`
  const images = await client
    .getEntries({ content_type: 'art' })
    .then((response) => response.items);

  return {
    props: {
      images,
    },
  };
}

export default Art;
