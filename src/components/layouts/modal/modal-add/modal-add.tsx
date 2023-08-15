import React from 'react';
import classNames from 'classnames/bind';

import { Field } from 'components/ui/field';
import { Input } from 'components/ui/input';
import { Textarea } from 'components/ui/textarea';
import { ImageLoader } from 'components/ui/image-loader/image-loader';
import { Button } from 'components/ui/button';
import { Heading } from 'components/ui/typography/heading';

import { Modal } from '../modal';

import { useAddBookForm } from './use-add-book-form';
import styles from './modal-add.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const ModalAdd: FC<Props> = ({ onClose, className }) => {
	const {
		register,
		handleImageChange,
		resetForm,
		onFormSubmit,
		formState: { errors },
	} = useAddBookForm(onClose);
	const header = (
		<>
			<Heading size="2">Добавить книгу</Heading>
		</>
	);
	const footer = (
		<>
			<Button variant="positive" form="add-book-form">
				Добавить
			</Button>
		</>
	);

	const fieldData = {
		title: {
			id: 'modal-field-title',
			label: 'Название произведения',
			errMessage: errors.title?.message,
		},
		author: {
			id: 'modal-field-author',
			label: 'Автор книги',
			errMessage: errors.author?.message,
		},
		description: {
			id: 'modal-field-description',
			label: 'Описание книги',
			errMessage: errors.description?.message,
		},
		cover: {
			id: 'modal-field-cover',
			label: 'Обложка',
			errMessage: errors.cover?.message,
		},
	};

	return (
		<Modal
			header={header}
			footer={footer}
			className={cx('modal-add', className)}
			closeModal={() => {
				onClose();
				resetForm();
			}}>
			<form className={cx('modal-add__form')} id="add-book-form" onSubmit={onFormSubmit}>
				<Field
					required
					id={fieldData.title.id}
					label={fieldData.title.label}
					errMessage={fieldData.title.errMessage}>
					<Input id={fieldData.title.id} className={cx('modal-add__input')} {...register('title')} />
				</Field>
				<Field
					required
					id={fieldData.author.id}
					label={fieldData.author.label}
					errMessage={fieldData.author.errMessage}>
					<Input id={fieldData.author.id} className={cx('modal-add__input')} {...register('author')} />
				</Field>
				<Field
					required
					id={fieldData.description.id}
					label={fieldData.description.label}
					errMessage={fieldData.description.errMessage}>
					<Textarea id={fieldData.description.id} {...register('description')} />
				</Field>
				<Field
					required
					id={fieldData.cover.id}
					label={fieldData.cover.label}
					errMessage={fieldData.cover.errMessage}>
					<ImageLoader id={fieldData.cover.id} onImageChange={handleImageChange} {...register('cover')} />
				</Field>
			</form>
		</Modal>
	);
};
