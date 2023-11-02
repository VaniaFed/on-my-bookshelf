import type { Book } from 'types';

export const getBooksFromLocalStorage = (): Book[] => {
	const data = localStorage.getItem('books');
	return data ? JSON.parse(data) : [];
};
