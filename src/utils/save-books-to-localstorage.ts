import type { BookState } from 'reduxx/slices/book/slice';

export const saveBooksToLocalStorage = (state: BookState): void => {
	if (!state) return;

	localStorage.setItem('books', JSON.stringify(state.books));
	localStorage.setItem('current', JSON.stringify(state.current));
};
