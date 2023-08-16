import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import type { RootState } from 'reduxx/store';
import type { Book } from './types';

const booksAdapter = createEntityAdapter<Book>();

const booksSlice = createSlice({
	name: 'books',
	initialState: booksAdapter.getInitialState(),
	reducers: {
		addBook: booksAdapter.addOne,
	},
});

export const { addBook } = booksSlice.actions;

const { selectAll, selectById } = booksAdapter.getSelectors((state: RootState) => state.books);

export const selectAllBooks = selectAll;
export const selectBookById = selectById;

export default booksSlice.reducer;
