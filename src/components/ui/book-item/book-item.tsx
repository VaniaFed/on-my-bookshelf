import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { ModalEdit } from 'components/ui/modal/modal-edit/modal-edit';

import { ProductImage } from '../product-image/product-image';
import { Heading } from '../typography/heading';
import { Subtitle } from '../typography/subtitle';
import { Link } from '../link';

import styles from './book-item.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const BookItem: FC<Props> = ({ id, title, author, src = '', alt, className }) => {
	// TODO: в хук
	const [modalShown, setModalShown] = useState<boolean>(false);

	const showModal = (): void => {
		setModalShown(true);
	};

	const hideModal = (): void => {
		setModalShown(false);
	};

	return (
		<div className={cx('book-item', className)}>
			<ProductImage src={src} dynamic={!src.length} alt={alt} className={cx('book-item__image')} />
			<div className={cx('book-item__content')}>
				<div>
					{/* тут будет href={'/books/bookId'} */}
					<Link href="#" level="h2">
						<Heading size="2">{title}</Heading>
					</Link>
					<Subtitle className={cx('book-item__subtitle')}>{author}</Subtitle>
				</div>
				<div className={cx('book-item__links')}>
					<button className={cx('book-item__btn')} onClick={showModal}>
						<img src={require(`${process.env.STATIC_URL}/edit.svg`)} />
					</button>
					{/* // тут будет еще одна кнопка  */}
				</div>
			</div>
			{modalShown && <ModalEdit bookId={id} onClose={hideModal} />}
		</div>
	);
};
