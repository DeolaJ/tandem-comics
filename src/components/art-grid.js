/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

import ArtCard from './partials/art-card';

const ArtGrid = ({ artPosts }) => (
  <section className="grid gap-8 my-16 place-content-between sm:gap-7 md:gap-10 sm:grid-cols-artgrid md:grid-cols-artgridMd">
    {artPosts.reverse().map((artPost) => (
      <ArtCard drawing={artPost} key={artPost.title} />
    ))}
  </section>
);

ArtGrid.propTypes = {
  artPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArtGrid;
