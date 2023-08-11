import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { fetchBooks, addBook } from '../redux/books/booksSlice';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && category) {
      const newBook = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };
      dispatch(addBook(newBook))
        .then(() => {
          dispatch(fetchBooks());
          setTitle('');
          setAuthor('');
          setCategory('');
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        className="title-input"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        className="author-input"
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        className="category-input"
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit" className="add-btn">ADD BOOK</button>
    </form>
  );
}

export default BookForm;
