import React from 'react';
import styled from '@emotion/styled';

const HomeBannerWrapper = styled.section`
  background-image: url('https://res.cloudinary.com/dzpntisxj/image/upload/c_scale,w_1700/v1612106484/tandem-art/IMG_20210109_132451_553_ie0gx0.jpg');
  background-color: rgb(119, 29, 13, 0.75);
  background-blend-mode: multiply;
  background-position-y: 37%;
`;

const OverlayText = styled.p``;

const HomeBanner = () => {
  return (
    <HomeBannerWrapper className="relative flex items-center justify-center w-full mb-12 bg-center bg-no-repeat bg-cover h-96">
      <OverlayText className="text-6xl text-white">Coming Soon</OverlayText>
    </HomeBannerWrapper>
  );
};

export default HomeBanner;
