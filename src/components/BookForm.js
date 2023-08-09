import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Author:', author);
    console.log('Category:', category);
    if (title && author && category) {
      const newBook = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };
      console.log('New Book:', newBook);
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
