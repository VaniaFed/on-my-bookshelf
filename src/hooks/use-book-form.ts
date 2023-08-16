import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useAppDispatch } from 'reduxx/hooks';
import { addBook, removeBook, selectBookById, updateBook } from 'reduxx/slices/book/slice';
import store from 'reduxx/store';
import { generateId } from 'utils/generate-id';

import type { SubmitHandler, UseFormRegister } from 'react-hook-form';
import type { Book } from 'reduxx/slices/book/types';

const bookSchema = yup
	.object({
		title: yup.string().min(3).max(50).required(),
		author: yup.string().min(3).max(50).required(),
		description: yup.string().max(5000),
		cover: yup.string(),
	})
	.required();

interface BookFields extends yup.InferType<typeof bookSchema> {}

interface FieldsData {
	id: string;
	label: string;
	errMessage: string;
	value?: string;
}

interface UseBookForm {
	register: UseFormRegister<BookFields>;
	resetForm: () => void;
	handleImageChange: (imgURL: string) => void;
	onFormSubmit: (e: React.FormEvent) => void;
	onRemoveBook: () => void;
	fieldsData: {
		title: FieldsData;
		author: FieldsData;
		description: FieldsData;
		cover: FieldsData;
	};
}

export function useBookForm(closeModal: () => void, mode: 'add' | 'edit' = 'add', bookId?: string): UseBookForm {
	const [book, setBook] = useState<Book>();

	const defaultValues = {
		title: '',
		author: '',
		description: '',
		cover: '',
	};

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		getValues,
		formState: { errors },
	} = useForm<BookFields>({
		resolver: yupResolver<BookFields>(bookSchema),
		defaultValues,
	});

	const dispatch = useAppDispatch();

	const addBookOnSubmit = (book: BookFields): void => {
		dispatch(addBook({ ...book, id: generateId() }));
	};

	const editBookOnSubmit = (book: BookFields): void => {
		if (!bookId) {
			return;
		}

		dispatch(updateBook({ id: bookId, changes: { ...book } }));
	};

	const onSubmit: SubmitHandler<BookFields> = (data): void => {
		if (mode === 'add') {
			addBookOnSubmit(data);
		} else {
			editBookOnSubmit(data);
		}
		closeModal();
		resetForm();
	};

	const onRemoveBook = (): void => {
		if (!bookId) return;

		dispatch(removeBook(bookId));
	};

	const handleImageChange = (imgURL: string): void => {
		setValue('cover', imgURL);
	};

	const resetForm = (): void => {
		reset();
	};

	const onFormSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		handleSubmit(onSubmit)();
	};

	const fieldsData: {
		title: FieldsData;
		author: FieldsData;
		description: FieldsData;
		cover: FieldsData;
	} = {
		title: {
			id: 'modal-field-title',
			label: 'Название произведения',
			errMessage: errors.title?.message ?? '',
			value: getValues('title') || '',
		},
		author: {
			id: 'modal-field-author',
			label: 'Автор книги',
			errMessage: errors.author?.message ?? '',
			value: getValues('author') || '',
		},
		description: {
			id: 'modal-field-description',
			label: 'Описание книги',
			errMessage: errors.description?.message ?? '',
			value: getValues('description') || '',
		},
		cover: {
			id: 'modal-field-cover',
			label: 'Обложка',
			errMessage: errors.cover?.message ?? '',
			value: getValues('cover') || '',
		},
	};

	useEffect(() => {
		if (!bookId) {
			return;
		}
		setBook(selectBookById(store.getState(), bookId));
	}, []);

	useEffect(() => {
		if (!book) return;
		reset({
			title: book?.title,
			author: book?.author,
			description: book?.description,
			cover: book?.cover,
		});
	}, [book]);

	return {
		register,
		handleImageChange,
		resetForm,
		onFormSubmit,
		onRemoveBook,
		fieldsData,
	};
}
