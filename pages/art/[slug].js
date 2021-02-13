import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { createClient } from 'contentful';
import Layout from '../../src/components/partials/layout';
import ArtCard from '../../src/components/partials/art-card';

const Art = ({ image }) => {
  return (
    <>
      <Head>
        <title>
          {image.fields.title}
          {' | Art'}
        </title>
        <meta name="twitter:title" content={image.fields.title} />
        <meta property="og:title" content={image.fields.title} />
        <meta name="twitter:site" content={image.fields.title} />
        <meta property="og:url" content={`www.tandemcomics.com/art/${image.fields.slug}`} />
      </Head>

      <Layout className="px-4 py-4 md:px-8 md:py-8">
        <h1 className="mb-3 text-4xl">{image.fields.title}</h1>
        <ArtCard drawing={image} key={image.sys.id} />
      </Layout>
    </>
  );
};

Art.propTypes = {
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

export async function getStaticProps(context) {
  // Creates an instance of the Contentful JavaScript SDK
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // Fetch all entries of art
  const result = await client
    .getEntries({ content_type: 'art', 'fields.slug': context.params.slug })
    .then((response) => response.items);

  const image = result[0];

  if (!image) {
    return { props: {} };
  }

  return {
    props: {
      image,
    },
  };
}

export async function getStaticPaths() {
  // Create an instance of the Contentful JavaScript SDK
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // Query Contentful for all drawings
  const drawings = await client
    .getEntries({ content_type: 'art' })
    .then((response) => response.items);

  // Map the result of that query to a list of slugs.
  const paths = drawings.map(({ fields: { slug } }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export default Art;
