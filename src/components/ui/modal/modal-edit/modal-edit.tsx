import React from 'react';

import { Field } from 'components/ui/field';
import { Input } from 'components/ui/input';
import { Textarea } from 'components/ui/textarea';
import { ImageLoader } from 'components/ui/image-loader/image-loader';
import { Button } from 'components/ui/button';
import { Heading } from 'components/ui/typography/heading';
import { Form } from 'components/ui/form';
import { useBookForm } from 'hooks/use-book-form';

import { Modal } from '../modal';

import type { FC } from 'react';
import type { Props } from './props';

export const ModalEdit: FC<Props> = ({ bookId, onClose, className }) => {
	const { register, handleImageChange, resetForm, onFormSubmit, onRemoveBook, fieldsData } = useBookForm(
		onClose,
		'edit',
		bookId
	);

	const header = (
		<>
			<Heading size="2">Редактировать</Heading>
		</>
	);

	const footer = (
		<>
			<Button variant="positive" form="add-book-form">
				Сохранить
			</Button>
			<Button variant="negative" onClick={onRemoveBook}>
				Удалить
			</Button>
		</>
	);

	return (
		<Modal
			header={header}
			footer={footer}
			className={className}
			closeModal={() => {
				onClose();
				resetForm();
			}}>
			<Form id="add-book-form" onSubmit={onFormSubmit}>
				<Field
					required
					id={fieldsData.title.id}
					label={fieldsData.title.label}
					errMessage={fieldsData.title.errMessage}>
					<Input id={fieldsData.title.id} solid autoFocus {...register('title')} />
				</Field>
				<Field
					required
					id={fieldsData.author.id}
					label={fieldsData.author.label}
					errMessage={fieldsData.author.errMessage}>
					<Input id={fieldsData.author.id} solid {...register('author')} />
				</Field>
				<Field
					id={fieldsData.description.id}
					label={fieldsData.description.label}
					errMessage={fieldsData.description.errMessage}>
					<Textarea id={fieldsData.description.id} {...register('description')} />
				</Field>
				<Field id={fieldsData.cover.id} label={fieldsData.cover.label} errMessage={fieldsData.cover.errMessage}>
					<ImageLoader
						id={fieldsData.cover.id}
						onImageChange={handleImageChange}
						defaultImage={fieldsData.cover.value as string}
						{...register('cover')}
					/>
				</Field>
			</Form>
		</Modal>
	);
};
