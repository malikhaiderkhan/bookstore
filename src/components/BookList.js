import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { fetchBooks } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector((state) => state.books.books);
  const flattenedBooks = Object.values(books).flat();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  if (!flattenedBooks || flattenedBooks.length === 0) {
    return (
      <div>
        <p className="no-book">No books found.</p>
        <h2 className="new-book">ADD NEW BOOK</h2>
        <BookForm />
      </div>
    );
  }
  return (
    <div>
      {/* <h2>Book List</h2> */}
      {flattenedBooks.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
      <h2 className="new-book">ADD NEW BOOK</h2>
      <BookForm />
    </div>
  );
}
export default BookList;
