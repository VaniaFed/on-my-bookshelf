import React from 'react';
import classNames from 'classnames/bind';

import { Field } from 'components/ui/field';
import { Input } from 'components/ui/input';
import { Textarea } from 'components/ui/textarea';
import { ImageLoader } from 'components/ui/image-loader/image-loader';
import { Button } from 'components/ui/button';
import { Heading } from 'components/ui/typography/heading';

import { Modal } from '../modal';

import { useBookForm } from './use-add-book-form';
import styles from './modal-add.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const ModalAdd: FC<Props> = ({ onClose, className }) => {
	const { register, handleImageChange, resetForm, onFormSubmit, errors, fieldsData } = useBookForm(onClose);
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
					id={fieldsData.title.id}
					label={fieldsData.title.label}
					errMessage={fieldsData.title.errMessage}>
					<Input id={fieldsData.title.id} className={cx('modal-add__input')} {...register('title')} />
				</Field>
				<Field
					required
					id={fieldsData.author.id}
					label={fieldsData.author.label}
					errMessage={fieldsData.author.errMessage}>
					<Input id={fieldsData.author.id} className={cx('modal-add__input')} {...register('author')} />
				</Field>
				<Field
					required
					id={fieldsData.description.id}
					label={fieldsData.description.label}
					errMessage={fieldsData.description.errMessage}>
					<Textarea id={fieldsData.description.id} {...register('description')} />
				</Field>
				<Field
					required
					id={fieldsData.cover.id}
					label={fieldsData.cover.label}
					errMessage={fieldsData.cover.errMessage}>
					<ImageLoader id={fieldsData.cover.id} onImageChange={handleImageChange} {...register('cover')} />
				</Field>
			</form>
		</Modal>
	);
};
