/* eslint-disable no-underscore-dangle */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Layout from '../../src/components/partials/layout';
import ComicsCard from '../../src/components/partials/comics-card';
import PaginatedPosts from '../../src/components/partials/paginated-posts';

import Comments from '../../src/components/partials/comments';
import Form from '../../src/components/partials/form';
import Like from '../../src/components/partials/like';

const ComicsPage = ({ comicsPost }) => {
  return (
    <>
      <Head>
        <title>
          {comicsPost.title}
          {' | Art'}
        </title>
        <meta name="twitter:title" content={comicsPost.title} />
        <meta property="og:title" content={comicsPost.title} />
        <meta name="twitter:site" content={comicsPost.title} />
        <meta
          property="og:url"
          content={`www.tandemcomics.com/comics/${comicsPost.slug.current}`}
        />
      </Head>

      <Layout className="px-4 py-4 md:px-8 md:py-8">
        <h1 className="my-8 text-4xl">{comicsPost.title}</h1>
        <section className="max-w-sm">
          <PaginatedPosts content={comicsPost} ListComponent={ComicsCard} type="single" />
        </section>
        <Like _id={comicsPost._id} />
        <article className="flex items-center my-5 -ml-3 -mr-3">
          {comicsPost.tags.map((tag) => (
            <p
              key={tag}
              className="px-3 py-2 mx-3 text-xs text-purple-700 bg-purple-100 rounded-md">
              {tag}
            </p>
          ))}
        </article>
        <Comments comments={comicsPost.comments} />
        <Form _id={comicsPost._id} />
      </Layout>
    </>
  );
};

ComicsPage.propTypes = {
  comicsPost: PropTypes.objectOf(PropTypes.any).isRequired,
};

export async function getStaticProps(context) {
  const query = encodeURIComponent(`*[_type == "comics" && slug.current == "${context.params.slug}"] | order(_updatedAt desc) {
    body,
    title,
    slug,
    author,
    mainImage,
    tags,
    publishedAt,
    likes,
    _createdAt,
    _updatedAt,
    _id,
    'comments': *[_type == "comments" && art._ref == ^._id && approved == true]{
        _id, 
        name, 
        email, 
        body, 
        _createdAt
    }
  }`);

  const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());

  const comicsPost = result.result[0];

  if (!comicsPost) {
    return { props: {} };
  }

  return {
    props: {
      comicsPost,
    },
  };
}

export async function getStaticPaths() {
  const query = encodeURIComponent(`*[_type == "comics" ] {
    slug,
  }`);
  const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());

  const paths = result.result.map(({ slug: { current: slug } }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export default ComicsPage;
