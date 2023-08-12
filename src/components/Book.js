import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';

function Book({ book }) {
  const { title, author, category } = book;
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(removeBook(book.item_id))
      .then(() => {
        dispatch(fetchBooks());
      });
  };

  return (
    <div className="top-panel">
      <div className="book-panel">
        <p className="dis-cat">
          {category}
        </p>
        <h2 className="dis-title">{title}</h2>
        <p className="dis-author">
          {author}
        </p>
        <button type="button" className="btn cmt-btn">
          Comments
        </button>
        <button type="button" onClick={handleDeleteClick} className="btn rmv-btn">
          Remove
        </button>
        <button type="button" className="btn edt-btn">
          Edit
        </button>
      </div>
      <div className="progress-container">
        <div className="progress-bar" />
        <div className="text-bar">
          <p className="percent">50%</p>
          <p className="status">Completed</p>
        </div>
      </div>
      <div className="chapter">
        <div className="vertical-line" />
        <p className="chap">CURRENT CHAPTER</p>
        <p className="chap-no">Chapter 17</p>
        <button type="button" className="prog-btn">UPDATE PROGRESS</button>
      </div>
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
