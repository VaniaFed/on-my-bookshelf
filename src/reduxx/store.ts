import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';

import { apiSlice } from 'reduxx/api';
import { writeBooksToLocalStorage } from 'utils/write-books-to-local-storage';

const getBooksListenerMiddleware = createListenerMiddleware();

getBooksListenerMiddleware.startListening({
	matcher: apiSlice.endpoints.getBooks.matchFulfilled,
	effect: async (action) => {
		const currentBooks = action.payload;
		writeBooksToLocalStorage(currentBooks);
	},
});

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware, getBooksListenerMiddleware.middleware),
});

export default store;
