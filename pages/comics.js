import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Layout from '../src/components/partials/layout';
import ComicsGallery from '../src/components/comics-gallery';

const Comics = ({ comicsPosts }) => {
  return (
    <>
      <Head>
        <title>Comics | Tandem Comics</title>
        <meta name="twitter:title" content="Comics | Tandem Comics" />
        <meta property="og:title" content="Comics | Tandem Comics" />
        <meta property="twitter:site" content="Comics | Tandem Comics" />
        <meta property="og:url" content="www.tandemcomics.com/comics" />
      </Head>

      <Layout className="px-4 py-4 md:px-8 md:py-8">
        <h1 className="my-8 text-3xl text-center text-custom-violet">All Comics</h1>
        <ComicsGallery comicsPosts={comicsPosts} />
      </Layout>
    </>
  );
};

Comics.propTypes = {
  comicsPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps() {
  const comicsQuery = encodeURIComponent(`*[ _type == "comics" ] | order(_createdAt desc)`);

  const comicsUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${comicsQuery}`;

  const comicsResult = await fetch(comicsUrl).then((res) => res.json());

  return {
    props: {
      comicsPosts: comicsResult.result || [],
    },
  };
}

export default Comics;
