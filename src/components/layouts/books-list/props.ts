import type { Book } from 'components/pages/book-list-page/book-list-page';

export interface Props {
	books: Book[];
	className?: string;
}
