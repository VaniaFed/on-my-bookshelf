import React from 'react';
import classNames from 'classnames/bind';

import { Modal } from 'components/ui/modal/modal';
import { Heading } from 'components/ui/typography/heading';
import { Button } from 'components/ui/button';
import { useBookForm } from 'hooks/use-book-form';
import { Subtitle } from 'components/ui/typography/subtitle';
import { ProductImage } from 'components/ui/product-image/product-image';
import { Paragraph } from 'components/ui/typography/paragraph';

import styles from './modal-view.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const ModalView: FC<Props> = ({ bookId, onClose, onOpenEditModal, className }) => {
	const { fieldsData } = useBookForm(onClose, 'edit', bookId);

	const header = (
		<>
			<Heading size="2">{fieldsData.title.value}</Heading>
			<Subtitle className={cx('modal-view__subtitle')}>{fieldsData.author.value}</Subtitle>
		</>
	);

	const footer = (
		<>
			<Button variant="secondary" onClick={onClose}>
				Закрыть
			</Button>
			<Button variant="attention" onClick={onOpenEditModal}>
				Редактировать
			</Button>
		</>
	);
	return (
		<Modal
			header={header}
			footer={footer}
			className={cx('modal-view', className)}
			closeModal={() => {
				onClose();
			}}>
			<div className={cx('modal-view__content')}>
				<ProductImage src={fieldsData.cover.value} className={cx('modal-view__cover')} />
				<Paragraph className={cx('modal-view__description')}>{fieldsData.description.value}</Paragraph>
			</div>
		</Modal>
	);
};
