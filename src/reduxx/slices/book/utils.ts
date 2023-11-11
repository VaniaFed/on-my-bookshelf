import type { PayloadAction } from '@reduxjs/toolkit';
import type { BookState } from 'reduxx/slices/book/slice';
import type { Book } from 'reduxx/slices/book/types';

export const findBookIndexInState = (state: BookState, action: PayloadAction<Book>): number => {
	const actionBookId = action.payload.id;
	const bookIndexInState = state.books.findIndex((book: Book) => book.id === actionBookId);

	return bookIndexInState;
};
