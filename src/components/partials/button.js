import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ link, text, className, sub, download }) => {
  if (sub) {
    return (
      <>
        {link ? (
          <a href={link} download={download}>
            <button
              type="button"
              className={`border-none bg-purple-50 font-semibold cursor-pointer text-xs sm:text-sm rounded-sm px-3 py-2 sm:px-4 sm:py-3 text-purple-600 hover:bg-purple-100 ${className}`}
              aria-label={text}
              // eslint-disable-next-line prettier/prettier
            >
              {text}
            </button>
          </a>
        ) : (
          <button
            type="button"
            className={`border-none bg-purple-50 font-semibold cursor-pointer text-xs sm:text-sm rounded-sm px-3 py-2 sm:px-4 sm:py-3 text-purple-600 hover:bg-purple-100 ${className}`}
            aria-label={text}
            // eslint-disable-next-line prettier/prettier
          >
            {text}
          </button>
        )}
      </>
    );
  }

  return (
    <>
      {link ? (
        <a href={link} download={download}>
          <button
            type="button"
            className={`border border-solid bg-transparent cursor-pointer rounded-sm px-5 py-3.5 text-purple-700 border-purple-700 hover:text-purple-900 hover:border-purple-900 ${className}`}
            aria-label={text}
            // eslint-disable-next-line prettier/prettier
          >
            {text}
          </button>
        </a>
      ) : (
        <button
          type="button"
          className={`border border-solid bg-transparent cursor-pointer rounded-sm px-5 py-3.5 text-purple-700 border-purple-700 hover:text-purple-900 hover:border-purple-900 ${className}`}
          aria-label={text}
          // eslint-disable-next-line prettier/prettier
        >
          {text}
        </button>
      )}
    </>
  );
};

Button.defaultProps = {
  className: '',
  link: '',
  sub: false,
  download: false,
};

Button.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  sub: PropTypes.bool,
  download: PropTypes.bool,
};

export default Button;
