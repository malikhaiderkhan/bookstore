import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';

function Book({ book }) {
  const { title, author, category } = book;
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(removeBook(book.item_id));
    dispatch(fetchBooks());
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>
        Author:
        {author}
      </p>
      <p>
        Category:
        {category}
      </p>
      <button type="button" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
