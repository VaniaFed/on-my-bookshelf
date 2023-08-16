import React from 'react';
import classNames from 'classnames/bind';

import { ModalEdit } from 'components/ui/modal/modal-edit/modal-edit';
import { ModalView } from 'components/ui/modal/modal-view/modal-view';
import { useModal } from 'hooks/use-modal';

import { ProductImage } from '../product-image/product-image';
import { Heading } from '../typography/heading';
import { Subtitle } from '../typography/subtitle';
import { Link } from '../link';

import styles from './book-item.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const BookItem: FC<Props> = ({ id, title, author, src = '', alt, className }) => {
	const { isModalShown: isEditModalShown, showModal: showEditModal, hideModal: hideEditModal } = useModal();
	const { isModalShown: isViewModalShown, showModal: showViewModal, hideModal: hideViewModal } = useModal();

	return (
		<div className={cx('book-item', className)}>
			<ProductImage src={src} alt={alt} className={cx('book-item__image')} />
			<div className={cx('book-item__content')}>
				<div>
					<Link href={`/books/${id}`} level="h2">
						<Heading size="2" className={cx('book-item__heading')}>
							{title}
						</Heading>
					</Link>
					<Subtitle className={cx('book-item__subtitle')}>{author}</Subtitle>
				</div>
				<div className={cx('book-item__links')}>
					<button className={cx('book-item__btn')} onClick={showEditModal}>
						<img src={require(`${process.env.STATIC_URL}/edit.svg`)} />
					</button>
					<button className={cx('book-item__btn')} onClick={showViewModal}>
						<img src={require(`${process.env.STATIC_URL}/review.png`)} />
					</button>
					{/* // тут будет еще одна кнопка  */}
				</div>
			</div>
			{isEditModalShown && <ModalEdit bookId={id} onClose={hideEditModal} />}
			{isViewModalShown && (
				<ModalView
					bookId={id}
					onClose={hideViewModal}
					onOpenEditModal={() => {
						hideViewModal();
						showEditModal();
					}}
				/>
			)}
		</div>
	);
};
