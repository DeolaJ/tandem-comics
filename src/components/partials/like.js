import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

function Likes({ _id }) {
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    const updateLikes = async () => {
      try {
        await fetch('/api/updateLikes', {
          method: 'POST',
          body: JSON.stringify({
            _id,
            increment: favourite,
          }),
          type: 'application/json',
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    };

    updateLikes();
  }, [favourite, _id]);

  return (
    <article className="flex mt-3">
      <button
        type="button"
        className="flex p-4 bg-purple-700 rounded-full"
        onClick={() => setFavourite((previousFavourite) => !previousFavourite)}>
        <Image
          src={favourite ? '/favourited.svg' : '/favourite.svg'}
          alt="favourite icon"
          width={20}
          height={20}
        />
      </button>
    </article>
  );
}

Likes.propTypes = {
  _id: PropTypes.string.isRequired,
};

export default Likes;
