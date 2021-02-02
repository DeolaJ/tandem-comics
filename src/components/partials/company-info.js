import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Button from './button';

const CompanyInfoWrapper = styled.section`
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  a:hover {
    border-bottom: 2px solid rgb(31, 32, 68);
  }
`;

const CompanyInfo = () => {
  return (
    <CompanyInfoWrapper className="md:grid">
      <article className="mb-10 md:mb-0">
        <h4 className="m-0 mb-5 text-sm font-semibold uppercase">Keep in touch</h4>
        <p className="mb-4 text-lg">
          Do you have a request, want to join our team, or just want to say hi?
        </p>
        <Button href="mailto:tandemcomics@gmail.com" text="Get in touch" />
      </article>
      <article>
        <h4 className="m-0 mb-5 text-sm font-semibold uppercase">Company</h4>
        <ul>
          <li className="mb-2 hover:border hover:border-solid">
            <Link href="/about">
              <a className="text-base">About</a>
            </Link>
          </li>
          <li className="mb-2 hover:border hover:border-solid">
            <Link href="/meet-the-characters">
              <a className="text-base">Meet the Characters</a>
            </Link>
          </li>
          <li className="mb-2 hover:border hover:border-solid">
            <Link href="/roadmap">
              <a className="text-base">RoadMap</a>
            </Link>
          </li>
        </ul>
      </article>
    </CompanyInfoWrapper>
  );
};

export default CompanyInfo;
