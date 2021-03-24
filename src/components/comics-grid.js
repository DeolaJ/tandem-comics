import React from 'react';
import PropTypes from 'prop-types';

import ComicsCard from './partials/comics-card';

const ComicsGrid = ({ comicsPosts }) => (
  <section className="grid gap-8 my-16 place-content-between sm:gap-7 md:gap-10 sm:grid-cols-artgrid md:grid-cols-artgridMd">
    {comicsPosts.reverse().map((comicsPost) => (
      <ComicsCard drawing={comicsPost} key={comicsPost.title} />
    ))}
  </section>
);

ComicsGrid.propTypes = {
  comicsPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ComicsGrid;
