import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from '@emotion/styled';
import BlockContent from '@sanity/block-content-to-react';
import Link from 'next/link';

import Button from './button';

const ImageWrapper = styled.div`
  > img {
    transition: visibility 0.5s ease;
  }
`;

const ArtCard = ({ drawing }) => {
  const [visible, setVisible] = useState(false);
  const refPlaceholder = useRef();
  const refContentPlaceholder = useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
    refContentPlaceholder.current.remove();
    setTimeout(() => setVisible(true), 500);
  };

  return (
    <article className="relative w-full rounded-lg">
      <div className="w-full bg-gray-100 rounded-lg h-80 shadow-artcard" ref={refPlaceholder} />

      <div className="px-3 py-5" ref={refContentPlaceholder}>
        <div className="w-2/4 h-3 mb-3 bg-gray-200" />
        <div className="w-4/5 h-3 bg-gray-200" />
      </div>

      {drawing.mainImage && (
        <>
          <ImageWrapper>
            <Image
              className={`absolute top-0 left-0 block object-cover w-full rounded-lg shadow-artcard ${
                visible ? 'visible' : 'invisible'
              }`}
              onLoad={removePlaceholder}
              onError={removePlaceholder}
              src={drawing.mainImage}
              alt={drawing.title}
              width={840}
              height={1015}
            />
          </ImageWrapper>

          <div className="py-2 mb-2">
            <Link href={`/comics/${drawing.slug.current}`}>
              <a>
                <h4 className="mb-1 text-lg font-medium text-gray-800 hover:text-gray-900 hover:underline">
                  {drawing.title}
                </h4>
              </a>
            </Link>
            <p className="m-0 text-sm text-gray-700">
              <BlockContent blocks={drawing.body} />
            </p>
          </div>

          <Button text="Download" download sub link={drawing.mainImage} />
        </>
      )}
    </article>
  );
};

ArtCard.propTypes = {
  drawing: PropTypes.shape({
    title: PropTypes.string.isRequired,
    mainImage: PropTypes.string.isRequired,
    body: PropTypes.arrayOf(PropTypes.any).isRequired,
    slug: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

export default ArtCard;
