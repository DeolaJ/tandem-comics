import React from 'react';
import styled from '@emotion/styled';
import Social from './partials/social';
import CompanyInfo from './partials/company-info';

const FooterWrapper = styled.footer`
  background: #fff2f3;

  > * {
    margin-bottom: 2.5rem;
  }

  .copywrite-content {
    margin-bottom: 0;
  }
`;

const Footer = () => (
  <FooterWrapper className="w-full px-6 pt-8 pb-6 md:px-10 md:pt-14 md:pb-10">
    <CompanyInfo />
    <Social />
    <article className="my-4 text-sm tracking-wide text-center copywrite-content">
      {'©'}
      {new Date().getFullYear()}
      {' - Tandem Comics'}
    </article>
  </FooterWrapper>
);

export default Footer;
