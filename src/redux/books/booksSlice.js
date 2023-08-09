import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/21sd5aCJqPiZ6U2XPgFG/books';

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
});

export const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  try {
    const response = await axios.post(URL, newBook);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookIdToRemove) => {
  try {
    const response = await axios.delete(`${URL}/${bookIdToRemove}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = Object.keys(action.payload).map((item) => {
          const book = {};
          book.author = action.payload[item][0].author;
          book.category = action.payload[item][0].category;
          book.title = action.payload[item][0].title;
          book.item_id = item;
          return book;
        });
        state.books = data;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const bookIdToRemove = action.payload;
        state.books = state.books.filter((book) => book.item_id !== bookIdToRemove);
        state.isLoading = false;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const booksReducer = bookSlice.reducer;
export default bookSlice.reducer;
