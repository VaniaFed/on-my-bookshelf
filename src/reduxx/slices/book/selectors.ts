import type { RootState } from 'reduxx/store';
import type { Book } from 'reduxx/slices/book/types';

export const selectCurrentBook = (state: RootState): Book => state.book.current as Book;

export const selectAllBooks = (state: RootState): Book[] => state.book.books;
