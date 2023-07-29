import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from './components/Navigation';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books books={books} onAdd={handleAddBook} />} />
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
  return (
    <>
      <h1>Categories Page</h1>
    </>
  );
}

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default App;
