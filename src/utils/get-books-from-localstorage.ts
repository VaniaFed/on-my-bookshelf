import type { BookState } from 'reduxx/slices/book/slice';

const isInvalid = (value: string): boolean => !value || value === 'undefined';

export const getBooksFromLocalStorage = (): BookState => {
	const books = localStorage.getItem('books') || '';
	const current = localStorage.getItem('current') || '';

	return {
		books: isInvalid(books) ? [] : JSON.parse(books),
		current: isInvalid(current) ? {} : JSON.parse(current),
	};
};
