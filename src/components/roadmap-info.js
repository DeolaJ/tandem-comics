/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import styled from '@emotion/styled';

const RoadmapInfoWrapper = styled.section``;

const roadmap = [
  {
    title: 'In the current 2-week period (Jan 24th - Feb 7th)',
    list: [
      {
        text: 'Develop the base for the landing page, and a few external pages',
        checked: true,
      },
      {
        text: 'Create the individual pages for the site with Coming Soon content',
        checked: true,
      },
      {
        text: 'Tied a Contentful CMS for art posts',
        checked: true,
      },
    ],
  },
  {
    title: 'In the current period (Feb 8th - March 13th)',
    list: [
      {
        text: 'Changed the Headless CMS from Contentful to Sanity',
        checked: true,
      },
      {
        text:
          'Migrated content from Contentful to Sanity, and edited the pages to suit the new architecture',
        checked: true,
      },
      {
        text: 'Create the base for commenting and liking posts using Sanity',
        checked: true,
      },
    ],
  },
  {
    title: 'In the current 2-week period (March 14th - March 27th)',
    list: [
      {
        text: 'Upload comic content to Sanity and link the comics to the Comic page',
        checked: true,
      },
      {
        text:
          'Replace Meet the Characters with Comics Templates for people to download comic templates and edit for personal use',
        checked: true,
      },
      {
        text: 'Update the UI of the homepage, Art and Comic pages',
        checked: true,
      },
      {
        text: 'Create illustrations for the Homepage',
        checked: false,
      },
      {
        text: 'Improve flow for liking and commenting',
        checked: false,
      },
    ],
  },
];

const RoadmapInfo = () => {
  return (
    <RoadmapInfoWrapper className="my-12 mb-28">
      <article>
        <h1 className="my-10 text-3xl">{"Tandem Comics' Roadmap"}</h1>

        {roadmap.reverse().map((plan) => (
          <ul className="mb-8 list-disc" key={plan.title}>
            <li className="mb-2 text-xl">{plan.title}</li>

            <ul className="p-0 m-0 list-none">
              {plan.list.map((listItem) => (
                <li
                  className="relative flex items-center mb-3 text-base leading-6"
                  key={listItem.text}
                  // eslint-disable-next-line prettier/prettier
                >
                  {listItem.checked && (
                    <span className="absolute text-xs top-1 -left-6">&#x2713;</span>
                  )}
                  <p>{listItem.text}</p>
                </li>
              ))}
            </ul>
          </ul>
        ))}
      </article>
    </RoadmapInfoWrapper>
  );
};

export default RoadmapInfo;
