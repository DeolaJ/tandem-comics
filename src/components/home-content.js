import React from 'react';
import styled from 'styled-components';

const HomeContentWrapper = styled.section`
  background-color: #771d0d;
`;

const HomeContent = () => {
  return (
    <HomeContentWrapper className="py-20 text-center">
      <article>
        <h1 className="text-5xl text-white">Coming Soon</h1>
      </article>
    </HomeContentWrapper>
  );
};

export default HomeContent;
