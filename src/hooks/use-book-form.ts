import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useAppDispatch } from 'reduxx/hooks';
import { addBook } from 'reduxx/slices/book/slice';
import { generateId } from 'utils/generate-id';

import type { SubmitHandler, UseFormRegister } from 'react-hook-form';

const bookSchema = yup
	.object({
		title: yup.string().min(3).max(20).required(),
		author: yup.string().min(3).max(20).required(),
		description: yup.string().max(100),
		cover: yup.string(),
	})
	.required();

interface BookFields extends yup.InferType<typeof bookSchema> {}

interface FieldsData {
	id: string;
	label: string;
	errMessage: string;
}

interface UseBookForm {
	register: UseFormRegister<BookFields>;
	resetForm: () => void;
	handleImageChange: (imgURL: string) => void;
	onFormSubmit: (e: React.FormEvent) => void;
	fieldsData: {
		title: FieldsData;
		author: FieldsData;
		description: FieldsData;
		cover: FieldsData;
	};
}

export function useBookForm(closeModal: () => void, mode: 'add' | 'edit' = 'add', bookId?: string): UseBookForm {
	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm<BookFields>({
		resolver: yupResolver<BookFields>(bookSchema),
		defaultValues: {
			title: '',
			author: '',
			description: '',
			cover: '',
		},
	});

	const dispatch = useAppDispatch();

	const addBookOnSubmit = (book: BookFields): void => {
		dispatch(addBook({ ...book, id: generateId() }));
	};

	const onSubmit: SubmitHandler<BookFields> = (data): void => {
		addBookOnSubmit(data);
		closeModal();
		resetForm();
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
		},
		author: {
			id: 'modal-field-author',
			label: 'Автор книги',
			errMessage: errors.author?.message ?? '',
		},
		description: {
			id: 'modal-field-description',
			label: 'Описание книги',
			errMessage: errors.description?.message ?? '',
		},
		cover: {
			id: 'modal-field-cover',
			label: 'Обложка',
			errMessage: errors.cover?.message ?? '',
		},
	};

	return {
		register,
		handleImageChange,
		resetForm,
		onFormSubmit,
		fieldsData,
	};
}
