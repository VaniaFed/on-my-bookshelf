import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import type { FormState, SubmitHandler, UseFormRegister } from 'react-hook-form';

const bookSchema = yup
	.object({
		title: yup.string().min(3).max(20).required(),
		author: yup.string().min(3).max(20).required(),
		description: yup.string().max(100),
		cover: yup.string(),
	})
	.required();

interface BookFields extends yup.InferType<typeof bookSchema> {}

interface UseAddBookForm {
	register: UseFormRegister<BookFields>;
	resetForm: () => void;
	handleImageChange: (imgURL: string) => void;
	onFormSubmit: (e: React.FormEvent) => void;
	formState: FormState<BookFields>;
}

export function useAddBookForm(closeModal: () => void): UseAddBookForm {
	const { register, handleSubmit, setValue, reset, formState, watch } = useForm<BookFields>({
		resolver: yupResolver<BookFields>(bookSchema),
	});

	const onSubmit: SubmitHandler<BookFields> = (data): void => {
		console.log(data);
		// TODO: redux dispatch
		closeModal();
		resetForm();
	};

	const handleImageChange = (imgURL: string): void => {
		setValue('cover', imgURL);
	};

	const resetForm = (): void => {
		reset();
	};

	const handleErrors = (err?: any): void => {
		console.warn('errors:', err);
	};

	const onFormSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		handleSubmit(onSubmit, handleErrors)();
	};

	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			console.log(value, name, type);
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [watch]);

	return {
		register,
		handleImageChange,
		resetForm,
		onFormSubmit,
		formState,
	};
}
