import { createSlice } from '@reduxjs/toolkit';

import { createNewBook, deleteBook, fetchAllBooks, fetchBookById, updateBook } from 'reduxx/slices/book/asyncActions';
import { findBookIndexInState } from 'reduxx/slices/book/utils';

import type { Book } from 'reduxx/slices/book/types';

export interface BookState {
	books: Book[];
	current?: Book;
}

const initialState: BookState = {
	books: [],
	current: undefined,
};

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchBookById.fulfilled, (state, action) => {
			state.current = action.payload;
		});
		builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
			state.books = action.payload;
		});
		builder.addCase(createNewBook.fulfilled, (state, action) => {
			state.books.push(action.payload);
		});
		builder.addCase(updateBook.fulfilled, (state, action) => {
			const bookIdToUpdate = findBookIndexInState(state, action);
			state.books[bookIdToUpdate] = action.payload;
		});
		builder.addCase(deleteBook.fulfilled, (state, action) => {
			const bookIdToDelete = findBookIndexInState(state, action);
			state.books.splice(bookIdToDelete, 1);
		});
	},
});

export default booksSlice.reducer;
