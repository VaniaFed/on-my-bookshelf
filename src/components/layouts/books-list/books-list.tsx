import React from 'react';
import classNames from 'classnames/bind';

import { BookItem } from 'components/ui/book-item';

import styles from './books-list.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const BooksList: FC<Props> = ({ books, className }) => {
	return (
		<div className={cx('books-list', className)}>
			{books.map((book, key) => (
				<BookItem title={book.title} author={book.author} src={book.src} key={key}></BookItem>
			))}
		</div>
	);
};