import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useCreateBookMutation, useDeleteBookMutation, useEditBookMutation, useGetBookByIdQuery } from 'reduxx/api';
import { generateId } from 'utils/generate-id';

import type { SubmitHandler, UseFormRegister } from 'react-hook-form';

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
	onDeleteBook: () => Promise<void>;
	fieldsData: {
		title: Field;
		author: Field;
		description: Field;
		cover: Field;
	};
}

export function useBookForm(closeModal: () => void, mode: 'add' | 'edit' = 'add', bookId?: string): UseBookForm {
	const { data: book } = useGetBookByIdQuery(bookId || '');

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

	const [createBook] = useCreateBookMutation();
	const [editBook] = useEditBookMutation();
	const [deleteBook] = useDeleteBookMutation();

	const handleCreateBook = async (book: BookFields): Promise<void> => {
		await createBook({ ...book, id: generateId() }).unwrap();
	};

	const handleEditBook = async (book: BookFields): Promise<void> => {
		if (!bookId) {
			return;
		}

		await editBook({ id: bookId, ...book }).unwrap();
	};

	const handleDeleteBook = async (): Promise<void> => {
		if (!bookId) return;

		await deleteBook(bookId).unwrap();
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
			handleEditBook(data);
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
