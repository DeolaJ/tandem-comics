/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import styled from 'styled-components';

const RoadmapInfoWrapper = styled.section``;

const roadmap = [
  {
    title: 'In the current 2-week period (Jan 24th - Feb 7th)',
    list: [
      {
        text: 'Develop the base for the landing page, and a few external pages',
        checked: false,
      },
      {
        text: "Create the 'Meet the Characters' page to showcase the Default Comic characters",
        checked: false,
      },
      {
        text: 'Create a Comics Page for easy navigation for comics (Next and Previous) frames',
        checked: false,
      },
    ],
  },
];

const RoadmapInfo = () => {
  return (
    <RoadmapInfoWrapper>
      <article>
        <h1 className="mb-4 text-4xl">{"Tandem Comics' Roadmap"}</h1>

        {roadmap.map((plan) => (
          <ul className="mb-4 list-disc" key={plan.title}>
            <li className="mb-2 text-2xl">{plan.title}</li>

            <ul className="p-0 m-0 list-none">
              {plan.list.map((listItem) => (
                <li
                  className="relative flex items-center mb-3 text-base leading-6"
                  key={listItem.text}
                  // eslint-disable-next-line prettier/prettier
                >
                  {listItem.checked && <span className="absolute -left-4 top-1">&#x2713;</span>}
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
