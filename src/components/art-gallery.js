import React from 'react';
import PropTypes from 'prop-types';

import ArtGrid from './art-grid';

const ArtGallery = ({ artPosts }) => <ArtGrid artPosts={artPosts} />;

ArtGallery.propTypes = {
  artPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArtGallery;
