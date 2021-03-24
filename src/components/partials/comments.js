import React from 'react';
import PropTypes from 'prop-types';
// import BlockContent from '@sanity/block-content-to-react';
import Date from '../../utils/date';

function Comments({ comments = [] }) {
  return (
    <>
      {comments.length > 0 && (
        <h2 className="mt-10 mb-4 text-2xl leading-tight lg:text-3xl">Comments:</h2>
      )}
      <ul>
        {comments.map(({ _id, _createdAt, name, email, body }) => (
          <li key={_id} className="mb-5">
            <hr className="mb-5" />
            <h4 className="mb-2 leading-tight">
              <a href={`mailto:${email}`}>{name}</a>
              {' ('}
              <Date dateString={_createdAt} />)
            </h4>
            <p>{body}</p>
            {/* <BlockContent blocks={body} /> */}
            <hr className="mt-5 mb-5" />
          </li>
        ))}
      </ul>
    </>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Comments;
