import React from 'react';
import styled from 'styled-components';

const AboutInfoWrapper = styled.section``;

const mission =
  'Tandem Comics is a platform for Gospel Art/Comic creators to share their content. Gospel artists will get publicity for their work, get paid for their work through endorsements, partnerships and ecommerce stores. We are committed to pushing the gospel of Christ to every end of the earth.';

const vision =
  "We want to be the number 1. platform on everyone's lips for Gospel Art/Comic creators in the world";

const AboutInfo = () => {
  return (
    <AboutInfoWrapper>
      <article>
        <h1 className="mb-6 text-4xl">About Tandem Comics</h1>
        <h2 className="m-0 mb-1 text-2xl">Mission</h2>
        <p className="mb-6 text-lg leading-8">{mission}</p>

        <h2 className="m-0 mb-1 text-2xl">Vision</h2>
        <p className="mb-6 text-lg leading-8">{vision}</p>
      </article>
    </AboutInfoWrapper>
  );
};

export default AboutInfo;
