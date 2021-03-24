import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import Button from './button';

const ComicsTemplatesCard = ({ template }) => {
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
      <div className="w-full bg-gray-100 rounded-lg h-60 shadow-artcard" ref={refPlaceholder} />

      <div className="px-3 py-5" ref={refContentPlaceholder}>
        <div className="w-2/4 h-3 mb-3 bg-gray-200" />
      </div>

      <Image
        className={`absolute left-0 block object-cover w-full rounded-lg shadow-artcard ${
          visible ? 'visible' : 'invisible'
        }`}
        onLoad={removePlaceholder}
        onError={removePlaceholder}
        src={`https://res.cloudinary.com/dzpntisxj/image/${template.type}/v${template.version}/${template.public_id}.${template.format}`}
        alt="Comics template"
        width={640}
        height={640}
      />

      <Button
        text="Download"
        download
        sub
        link={`https://res.cloudinary.com/dzpntisxj/image/${template.type}/v${template.version}/${template.public_id}.${template.format}`}
      />
    </article>
  );
};

ComicsTemplatesCard.propTypes = {
  template: PropTypes.shape({
    public_id: PropTypes.string.isRequired,
    version: PropTypes.number.isRequired,
    format: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default ComicsTemplatesCard;
