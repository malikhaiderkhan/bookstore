import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books.books);

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

export default BookList;
