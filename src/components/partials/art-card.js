import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from './button';

const ArtCard = ({ drawing }) => {
  const refPlaceholder = useRef();
  const refContentPlaceholder = useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
    refContentPlaceholder.current.remove();
  };

  return (
    <article className="relative w-full rounded-lg">
      <div className="bg-gray-100 rounded-lg w-60 h-80 shadow-artcard" ref={refPlaceholder} />

      <div className="px-3 py-5" ref={refContentPlaceholder}>
        <div className="w-2/4 h-3 mb-3 bg-gray-200" />
        <div className="w-4/5 h-3 bg-gray-200" />
      </div>

      {drawing.id && (
        <>
          <Image
            className="absolute left-0 block object-cover w-full rounded-lg shadow-artcard"
            onLoad={removePlaceholder}
            onError={removePlaceholder}
            src={drawing.download_img}
            alt={drawing.title}
            width={840}
            height={1015}
          />

          <div className="py-2 mb-2">
            <h4 className="mb-1 text-lg font-medium text-gray-800">{drawing.title}</h4>
            <p className="m-0 text-sm text-gray-700">{drawing.description}</p>
          </div>

          <Button text="Download" download sub link={drawing.download_img} />
        </>
      )}
    </article>
  );
};

ArtCard.propTypes = {
  drawing: PropTypes.shape({
    id: PropTypes.number,
    thumb_img: PropTypes.string,
    regular_img: PropTypes.string,
    download_img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ArtCard;
