import React from 'react';
import PropTypes from 'prop-types';

import ComicsGrid from './comics-grid';

const ComicsGallery = ({ comicsPosts }) => <ComicsGrid comicsPosts={comicsPosts} />;

ComicsGallery.propTypes = {
  comicsPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ComicsGallery;
