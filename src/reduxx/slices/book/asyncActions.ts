import { createAsyncThunk } from '@reduxjs/toolkit';

import { bookAPI } from 'api/bookAPI';

import type { Book } from 'reduxx/slices/book/types';

export const fetchBookById = createAsyncThunk(
	'books/fetchByIdStatus',
	async (bookId: string) => await bookAPI.fetchById(bookId)
);

export const fetchAllBooks = createAsyncThunk('books/fetchAllBooks', async () => await bookAPI.fetchAll());
export const createNewBook = createAsyncThunk('books/createNewBook', async (book: Book) => await bookAPI.create(book));
export const updateBook = createAsyncThunk('books/updateBook', async (book: Book) => await bookAPI.update(book));
export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId: string) => await bookAPI.delete(bookId));
