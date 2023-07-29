import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>
        Author:
        {' '}
        {book.author}
      </p>
      {/* Only display the delete button without any onClick action */}
      <button type="button">
        Delete
      </button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
