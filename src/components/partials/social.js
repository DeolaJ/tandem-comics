import React from 'react';
import styled from 'styled-components';

const SocialWrapper = styled.article`
  ul {
    max-width: 200px;
  }

  svg {
    width: 24px;
  }

  &::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background: #771d0d;
    left: 0;
    top: 38%;
    z-index: -1;
  }
`;

const Social = () => (
  <SocialWrapper className="relative w-full my-8 mt-10 text-center">
    <ul className="p-0 px-4 m-0 mx-auto list-none bg-white">
      <li className="inline-block w-5 mx-4">
        <a
          href="https://www.instagram.com/tandem_comics"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Instagram"
          // eslint-disable-next-line prettier/prettier
        >
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 512 512">
            <title>Instagram</title>
            <g>
              <g>
                <path d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z" />
              </g>
            </g>
            <g>
              <g>
                <circle cx="393.6" cy="118.4" r="17.056" />
              </g>
            </g>
          </svg>
        </a>
      </li>
      <li className="inline-block w-5 mx-4">
        <a
          href="https://twitter.com/tandem_comics"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Twitter"
          // eslint-disable-next-line prettier/prettier
        >
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 612 612">
            <title>Twitter</title>
            <path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z" />
          </svg>
        </a>
      </li>
    </ul>
  </SocialWrapper>
);

export default Social;
