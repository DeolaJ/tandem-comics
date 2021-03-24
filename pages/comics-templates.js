import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../src/components/partials/layout';
import ComicsTemplateGrid from '../src/components/comics-templates-grid';

const ComicsTemplates = ({ comicsTemplates }) => {
  return (
    <>
      <Head>
        <title>Comics Templates | Tandem Comics</title>
        <meta name="twitter:title" content="Comics Templates | Tandem Comics" />
        <meta property="og:title" content="Comics Templates | Tandem Comics" />
        <meta property="twitter:site" content="Comics Templates | Tandem Comics" />
        <meta property="og:url" content="www.tandemcomics.com/comics-templates" />
      </Head>

      <Layout className="px-4 py-4 md:px-8 md:py-8">
        <h1 className="my-8 text-3xl text-center text-custom-violet">Comics Templates</h1>
        <ComicsTemplateGrid templates={comicsTemplates} />
      </Layout>
    </>
  );
};

ComicsTemplates.propTypes = {
  comicsTemplates: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUDNAME}/image/list/comicTemplate.json`
  );
  const templates = await res.json();
  const comicsTemplates = templates.resources;

  return {
    props: {
      comicsTemplates: comicsTemplates || [],
    },
  };
}

export default ComicsTemplates;
