import type { Book } from 'types';

export const filterBooks = (books: Book[], filter: string): Book[] => {
	if (!books) return [];
	return books.filter(
		({ title, author }) =>
			title.toLowerCase().includes(filter.toLowerCase()) || author.toLowerCase().includes(filter.toLowerCase())
	);
};
