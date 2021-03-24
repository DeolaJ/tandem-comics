import React from 'react';
import styled from '@emotion/styled';

import Button from './button';

const HomeHeaderTitle = styled.h1`
  line-height: 3rem;
`;

const HomeHeader = () => {
  return (
    <section className="max-w-xl px-6 py-32 mx-auto text-center md:px-8 text-custom-violet">
      <HomeHeaderTitle className="mb-6 text-4xl font-bold leading-10 sm:text-5xl">
        Where Gospel Art and Comics Lives
      </HomeHeaderTitle>
      <p className="mb-6 text-base">
        Spreading the Gospel of Christ through visual and design gifts. Join our community of
        creators
      </p>
      <Button text="Become a Contributor" />
    </section>
  );
};

export default HomeHeader;
