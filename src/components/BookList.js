import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

function BookList() {
  const books = useSelector((state) => state.books.books);

  if (!books || books.length === 0) {
    return (
      <div>
        <p>No books found.</p>
        <BookForm />
      </div>
    );
  }

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
      <BookForm />
    </div>
  );
}

export default BookList;
