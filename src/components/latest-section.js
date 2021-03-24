/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import LatestItem from './partials/latest-item';

const LatestTitle = styled.h2`
  &::after {
    position: absolute;
    content: '';
    bottom: -10px;
    left: 0;
    height: 1px;
    background: white;
    width: 100%;
    max-width: 200px;
  }

  + ul {
    > * + * {
      margin-top: 2rem;
    }
  }

  @media (min-width: 640px) {
    + ul {
      > * + * {
        margin-top: 0;
        margin-left: 2rem;
      }
    }
  }
`;

function LatestGrid({ title, content, type }) {
  return (
    <article>
      <LatestTitle className="relative mb-8 text-2xl leading-6 text-white">{title}</LatestTitle>
      <ul className="sm:flex sm:items-center sm:justify-between">
        {content
          .reverse()
          .slice(0, 3)
          .map((contentItem) => (
            <LatestItem content={contentItem} key={contentItem._id} type={type} />
          ))}
      </ul>
    </article>
  );
}

LatestGrid.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LatestGrid;
