import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { generateId } from 'utils/generate-id';

import type { RootState } from 'reduxx/store';
import type { Book } from './types';

const initialState: Book[] = [
	{ title: 'Так говорил заратустра1 dslf l;sdfsd fjsdljflds jsdljf klsdjfdlsk jsdkljlk', author: 'Ф. Ницше' },
];

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		bookAdded: {
			reducer(state, action: PayloadAction<Book>) {
				state.push(action.payload);
			},
			prepare(book: Book) {
				return {
					payload: {
						id: generateId(),
						...book,
					},
				};
			},
		},
	},
});

export const { bookAdded } = booksSlice.actions;

export const selectBooks = (state: RootState): Book[] => state.books;

export default booksSlice.reducer;
