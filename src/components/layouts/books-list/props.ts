import type { Book } from 'reduxx/slices/book/types';

export interface Props {
	books: Book[];
	className?: string;
}
