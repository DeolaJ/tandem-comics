import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import HomeHeader from './partials/home-header';
import OtherPages from './partials/other-pages';

const HomeContentWrapper = styled.section``;
const LatestSectionWrapper = styled.section`
  > article + article {
    margin-top: 5rem;
  }
`;

const HomeContent = ({ children }) => {
  return (
    <HomeContentWrapper>
      <HomeHeader />
      <LatestSectionWrapper className="px-8 py-20 bg-custom-violet md:px-12 md:py-28">
        {children}
      </LatestSectionWrapper>
      <OtherPages />
    </HomeContentWrapper>
  );
};

HomeContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeContent;
