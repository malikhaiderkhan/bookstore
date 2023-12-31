import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './components/Navigation';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import { checkStatus } from './redux/categories/categoriesSlice';
import { addBook } from './redux/books/booksSlice';

function App() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const onAdd = (newBook) => {
    dispatch(addBook(newBook));
  };

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<BookList books={books} onAdd={onAdd} />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

function Books({ books, onAdd }) {
  return (
    <>
      <h1>Book Page</h1>
      <BookList books={books} />
      <BookForm onAdd={onAdd} />
    </>
  );
}

function Categories() {
  const status = useSelector(checkStatus);

  return (
    <>
      <h1>Categories Page</h1>
      <p>{status}</p>
    </>
  );
}

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default App;
