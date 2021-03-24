import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Layout from '../src/components/partials/layout';
import HomeContent from '../src/components/home-content';
import LatestGrid from '../src/components/latest-section';

const Home = ({ artPosts, comicsPosts }) => {
  return (
    <>
      <Head>
        <title>Tandem Comics</title>
        <meta name="twitter:title" content="Tandem Comics" />
        <meta property="og:title" content="Tandem Comics" />
        <meta property="og:url" content="www.tandemcomics.com" />
        <meta name="twitter:site" content="Tandem Comics" />
      </Head>

      <Layout
        className="bg-no-repeat"
        style={{
          minHeight: '60vh',
          // backgroundImage: "url('/background.svg')",
          // backgroundPosition: 'top right',
          // backgroundSize: 'cover',
        }}>
        <HomeContent>
          <LatestGrid title="Latest Art" content={artPosts} type="art" />
          <LatestGrid title="Latest Comics" content={comicsPosts} type="comics" />
        </HomeContent>
      </Layout>
    </>
  );
};

Home.propTypes = {
  artPosts: PropTypes.arrayOf(PropTypes.any).isRequired,
  comicsPosts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export async function getStaticProps() {
  const artQuery = encodeURIComponent(`*[ _type == "art" ] | order(_createdAt desc)`);
  const comicsQuery = encodeURIComponent(`*[ _type == "comics" ] | order(_createdAt desc)`);

  const artUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${artQuery}`;
  const comicsUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${comicsQuery}`;

  const artResult = await fetch(artUrl).then((res) => res.json());
  const comicsResult = await fetch(comicsUrl).then((res) => res.json());

  return {
    props: {
      artPosts: artResult.result || [],
      comicsPosts: comicsResult.result || [],
    },
  };
}

export default Home;
