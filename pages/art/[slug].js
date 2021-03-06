/* eslint-disable no-underscore-dangle */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../../src/components/partials/layout';
import ArtCard from '../../src/components/partials/art-card';
import Comments from '../../src/components/partials/comments';
import Form from '../../src/components/partials/form';
import Like from '../../src/components/partials/like';

const ArtPage = ({ image }) => {
  return (
    <>
      <Head>
        <title>
          {image.title}
          {' | Art'}
        </title>
        <meta name="twitter:title" content={image.title} />
        <meta property="og:title" content={image.title} />
        <meta name="twitter:site" content={image.title} />
        <meta property="og:url" content={`www.tandemcomics.com/art/${image.slug.current}`} />
      </Head>

      <Layout className="px-4 py-4 md:px-8 md:py-8">
        <h1 className="my-8 text-4xl">{image.title}</h1>
        <section className="max-w-sm">
          <ArtCard drawing={image} />
        </section>
        <Like _id={image._id} />
        <article className="flex items-center my-5 -ml-3 -mr-3">
          {image.tags.map((tag) => (
            <p
              key={tag}
              className="px-3 py-2 mx-3 text-xs text-purple-700 bg-purple-100 rounded-md">
              {tag}
            </p>
          ))}
        </article>
        <Comments comments={image.comments} />
        <Form _id={image._id} />
      </Layout>
    </>
  );
};

ArtPage.propTypes = {
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

export async function getStaticProps(context) {
  const query = encodeURIComponent(`*[_type == "art" && slug.current == "${context.params.slug}"] | order(_updatedAt desc) {
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

  const image = result.result[0];

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
  const query = encodeURIComponent(`*[_type == "art" ] {
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

export default ArtPage;
