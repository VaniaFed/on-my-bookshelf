import type { Book } from 'types';

export const writeBooksToLocalStorage = (books: Book[] | any): void => {
	if (!Array.isArray(books)) return;

	const data = books ? JSON.stringify(books) : '';
	localStorage.setItem('books', data);
};
