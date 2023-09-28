import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Book } from 'types';

// const LOCAL_API = 'http://localhost:3001';
const API = 'https://on-my-bookshelf-server.vercel.app/';

export const apiSlice = createApi({
	reducerPath: 'bookApi',
	tagTypes: ['Books'],
	baseQuery: fetchBaseQuery({ baseUrl: API }),
	endpoints: (builder) => ({
		getBooks: builder.query<Book[], void>({
			query: () => '/books/',
			providesTags: (result) =>
				result ? [...result.map(({ id }) => ({ type: 'Books' as const, id })), 'Books'] : ['Books'],
		}),
		getBookById: builder.query<Book, string>({
			query: (id: string) => `/books/${id}`,
			providesTags: ['Books'],
		}),
		createBook: builder.mutation({
			query: (book: Book) => ({
				url: '/books/',
				method: 'POST',
				body: book,
			}),
			invalidatesTags: ['Books'],
		}),
		editBook: builder.mutation({
			query: (book: Book) => ({
				url: `/books/${book.id}`,
				method: 'PATCH',
				body: book,
			}),
			invalidatesTags: ['Books'],
		}),
		deleteBook: builder.mutation<{ success: boolean; id: string }, string>({
			query: (id) => ({
				url: `/books/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Books'],
		}),
	}),
});

export const {
	useGetBookByIdQuery,
	useGetBooksQuery,
	useCreateBookMutation,
	useEditBookMutation,
	useDeleteBookMutation,
} = apiSlice;
