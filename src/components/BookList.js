import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList({ books }) {
  if (!books || books.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <>
      <h2>Book List</h2>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
