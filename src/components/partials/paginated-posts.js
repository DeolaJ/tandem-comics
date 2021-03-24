import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Pagination from './pagination';

function PaginatedPosts({ content, ListComponent, type }) {
  const [currentPost, setCurrentPost] = useState(1);

  return (
    <section>
      <ListComponent
        type={type}
        drawing={content}
        activeImage={content.mainImage[currentPost - 1]}
      />
      {content.mainImage.length > 1 && (
        <Pagination
          images={content.mainImage}
          changePost={setCurrentPost}
          currentPost={currentPost}
        />
      )}
    </section>
  );
}

PaginatedPosts.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  ListComponent: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default PaginatedPosts;
