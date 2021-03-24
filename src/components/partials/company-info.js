import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import Button from './button';

const CompanyInfoWrapper = styled.section`
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  ul a:hover {
    border-bottom: 2px solid rgb(31, 32, 68);
  }
`;

const CompanyInfo = () => {
  return (
    <CompanyInfoWrapper className="md:grid">
      <article className="mb-10 md:mb-0">
        <h4 className="m-0 mb-3 text-sm font-semibold uppercase text-custom-violet">
          Keep in touch
        </h4>
        <p className="mb-4 text-sm">
          Do you have a request, want to join our team, or just want to say hi?
        </p>
        <Button
          link="mailto:tandemcomics@gmail.com"
          text="Get in touch"
          className="px-2 py-1 text-xs"
        />
      </article>
      <article>
        <h4 className="m-0 mb-3 text-sm font-semibold uppercase text-custom-violet">Company</h4>
        <ul>
          <li className="mb-1 hover:border hover:border-solid">
            <Link href="/about">
              <a className="text-sm leading-3">About</a>
            </Link>
          </li>
          <li className="mb-1 hover:border hover:border-solid">
            <Link href="/meet-the-characters">
              <a className="text-sm leading-3">Meet the Characters</a>
            </Link>
          </li>
          <li className="mb-1 hover:border hover:border-solid">
            <Link href="/roadmap">
              <a className="text-sm leading-3">RoadMap</a>
            </Link>
          </li>
        </ul>
      </article>
    </CompanyInfoWrapper>
  );
};

export default CompanyInfo;
