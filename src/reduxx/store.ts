import { configureStore } from '@reduxjs/toolkit';

import { getBooksFromLocalStorage } from 'utils/get-books-from-localstorage';
import { saveBooksToLocalStorage } from 'utils/save-books-to-localstorage';

import bookReducer from './slices/book/slice';

export const store = configureStore({
	reducer: {
		book: bookReducer,
	},
	preloadedState: {
		book: getBooksFromLocalStorage(),
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

store.subscribe(() => {
	saveBooksToLocalStorage(store.getState().book);
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
