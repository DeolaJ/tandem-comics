import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const OtherPagesWrapper = styled.section`
  div {
    background: linear-gradient(to right, #ff3d5a, #441151);
  }

  @media (max-width: 475px) {
    div {
      margin-bottom: 2rem;
    }

    .art-link {
      margin-bottom: 0;
    }
  }

  @media (min-width: 475px) {
    grid-gap: 2rem;
    grid-template-areas:
      'leftpages rightPages'
      'leftpages rightPages';
  }
`;

const LeftPages = styled.article`
  grid-area: leftpages;
`;

const RightPages = styled.article`
  grid-area: rightPages;
`;

const OtherPages = () => {
  return (
    <OtherPagesWrapper className="px-6 py-24 md:grid md:px-8">
      <LeftPages className="flex flex-col text-6xl">
        <div className="flex items-center justify-center text-center art-link">
          <Link href="/art">
            <a className="w-full h-full p-4 text-xl text-white hover:underline">Art</a>
          </Link>
        </div>
        <div className="flex items-center justify-center mt-8 text-center">
          <Link href="/comics">
            <a className="w-full h-full p-4 text-xl text-white hover:underline">Comics</a>
          </Link>
        </div>
      </LeftPages>
      <RightPages className="text-6xl text-white">
        <div className="h-full text-center">
          <Link href="/comics-templates">
            <a className="flex items-center justify-center w-full h-full p-4 text-xl text-white hover:underline">
              Comics Templates
            </a>
          </Link>
        </div>
      </RightPages>
    </OtherPagesWrapper>
  );
};

export default OtherPages;
