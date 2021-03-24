import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'next/image';

const PaginationButton = styled.button`
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const Pagination = ({ images, currentPost, changePost }) => {
  const parts = images.length;

  return (
    <div className="flex items-center justify-end w-full my-10">
      {currentPost !== 1 && (
        <PaginationButton
          onClick={() => changePost(1)}
          disabled={currentPost === 1}
          className="flex p-3 bg-transparent shadow-none cursor-pointer hover:bg-gray-200">
          <Image
            src="/chevron-left.svg"
            alt="button icon"
            className="block w-3 h-3 -mr-1"
            width={20}
            height={20}
          />
          <Image
            src="/chevron-left.svg"
            alt="button icon"
            className="block w-3 h-3"
            width={20}
            height={20}
          />
        </PaginationButton>
      )}

      <PaginationButton
        onClick={() => currentPost > 1 && changePost(currentPost - 1)}
        disabled={currentPost === 1}
        className="flex p-3 bg-transparent shadow-none cursor-pointer hover:bg-gray-200">
        <Image
          src="/chevron-left.svg"
          alt="button icon"
          className="block w-4 h-4"
          width={20}
          height={20}
        />
      </PaginationButton>

      <div className="flex mx-4">
        <p className="mr-2">{currentPost}</p>
        <p className="total">{`of ${parts}`}</p>
      </div>

      <PaginationButton
        onClick={() => currentPost < parts && changePost(currentPost + 1)}
        disabled={currentPost === parts}
        className="flex p-3 bg-transparent shadow-none cursor-pointer hover:bg-gray-200">
        <Image
          src="/chevron-right.svg"
          alt="button icon"
          className="block w-4 h-4"
          width={20}
          height={20}
        />
      </PaginationButton>

      {currentPost !== parts && (
        <PaginationButton
          onClick={() => changePost(parts)}
          disabled={currentPost === parts}
          className="flex p-3 bg-transparent shadow-none cursor-pointer hover:bg-gray-200">
          <Image
            src="/chevron-right.svg"
            alt="button icon"
            className="block w-3 h-3"
            width={20}
            height={20}
          />
          <Image
            src="/chevron-right.svg"
            alt="button icon"
            className="block w-3 h-3 -ml-1"
            width={20}
            height={20}
          />
        </PaginationButton>
      )}
    </div>
  );
};

Pagination.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  changePost: PropTypes.func.isRequired,
  currentPost: PropTypes.number.isRequired,
};

export default Pagination;
