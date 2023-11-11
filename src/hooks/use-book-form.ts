import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useAppDispatch } from 'reduxx/hooks';
import { createNewBook, deleteBook, fetchBookById, updateBook } from 'reduxx/slices/book/asyncActions';
import { selectCurrentBook } from 'reduxx/slices/book/selectors';

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

interface Field {
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
	onDeleteBook: () => void;
	fieldsData: {
		title: Field;
		author: Field;
		description: Field;
		cover: Field;
	};
}

export function useBookForm(closeModal: () => void, mode: 'add' | 'edit' = 'add', bookId?: string): UseBookForm {
	const book = useSelector(selectCurrentBook);

	const defaultValues = book || {
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

	const handleCreateBook = (book: BookFields): void => {
		dispatch(createNewBook(book as Book));
	};

	const handleUpdateBook = (book: BookFields): void => {
		if (!bookId) {
			return;
		}
		dispatch(updateBook({ id: bookId, ...book }));
	};

	const handleDeleteBook = (): void => {
		if (!bookId) return;

		dispatch(deleteBook(bookId));

		closeModal();
		resetForm();
	};

	const handleImageChange = (imgURL: string): void => {
		setValue('cover', imgURL);
	};

	const resetForm = (): void => {
		reset();
	};

	const onSubmit: SubmitHandler<BookFields> = (data): void => {
		if (mode === 'add') {
			handleCreateBook(data);
		} else {
			handleUpdateBook(data);
		}
		closeModal();
		resetForm();
	};

	const onFormSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		handleSubmit(onSubmit)();
	};

	const fieldsData: {
		title: Field;
		author: Field;
		description: Field;
		cover: Field;
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
		if (bookId) {
			dispatch(fetchBookById(bookId));
		}
	}, [bookId]);

	useEffect(() => {
		if (!book || !bookId) return;

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
		onDeleteBook: handleDeleteBook,
		fieldsData,
	};
}
