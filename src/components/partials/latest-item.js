import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from '@emotion/styled';
import Link from 'next/link';

const ImageWrapper = styled.div`
  > img {
    transition: visibility 0.5s ease;
  }
`;

const ColorLay = styled.div`
  background: linear-gradient(to top, rgba(4, 5, 35, 0.65) 20%, transparent);
`;

const LatestItem = ({ content, type }) => {
  const [visible, setVisible] = useState(false);
  const refPlaceholder = useRef();
  const refContentPlaceholder = useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
    refContentPlaceholder.current.remove();
    setTimeout(() => setVisible(true), 500);
  };

  return (
    <article className="relative w-full">
      <div className="w-full bg-gray-100 h-80 shadow-artcard" ref={refPlaceholder} />

      <div className="absolute w-full bottom-5 left-5" ref={refContentPlaceholder}>
        <div className="w-2/4 h-4 mb-3 bg-gray-600" />
      </div>

      {content.mainImage && (
        <>
          <ImageWrapper className={visible ? 'visible' : 'invisible'}>
            <Image
              className="absolute top-0 left-0 block object-cover w-full shadow-artcard"
              onLoad={removePlaceholder}
              onError={removePlaceholder}
              src={type === 'comics' ? content.mainImage[0] : content.mainImage}
              alt={content.title}
              width={840}
              height={type === 'comics' ? 840 : 1015}
            />
          </ImageWrapper>

          <ColorLay className="absolute top-0 left-0 z-10 w-full h-full" />

          <h4 className="absolute z-20 text-sm font-medium text-white bottom-5 left-5 opacity-80">
            {content.title}
          </h4>

          <div className="absolute top-0 left-0 z-30 w-full h-full">
            <Link
              href={`/${type}/${content.slug.current}`}
              className="w-full h-full cursor-pointer">
              <a className="block w-full h-full opacity-0">
                {'Link to '}
                {`${type} content`}
              </a>
            </Link>
          </div>
        </>
      )}
    </article>
  );
};

LatestItem.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    mainImage: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
    slug: PropTypes.objectOf(PropTypes.any),
    body: PropTypes.arrayOf(PropTypes.any).isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default LatestItem;
