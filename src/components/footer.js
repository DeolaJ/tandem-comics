import React from 'react';
import styled from 'styled-components';
import Social from './partials/social';
import CompanyInfo from './partials/company-info';

const FooterWrapper = styled.footer`
  > * {
    margin-bottom: 2.5rem;
  }

  .copywrite-content {
    margin-bottom: 0;
  }
`;

const Footer = () => (
  <FooterWrapper className="w-full px-6 py-8 md:px-10">
    <CompanyInfo />
    <Social />
    <article className="my-10 text-lg tracking-wide text-center copywrite-content">
      {'©'}
      {new Date().getFullYear()}
      {' - Tandem Comics'}
    </article>
  </FooterWrapper>
);

export default Footer;
