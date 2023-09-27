import React from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ProductImage } from 'components/ui/product-image/product-image';
import { Heading } from 'components/ui/typography/heading';
import { Subtitle } from 'components/ui/typography/subtitle';
import { Paragraph } from 'components/ui/typography/paragraph';
import { BoxContainer } from 'components/layouts/box-container';
import { Link } from 'components/ui/link';
import { useGetBookByIdQuery } from 'reduxx/api';

import styles from './book-page.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const BookPage: FC<Props> = ({ className }) => {
	const { bookId = '' } = useParams();
	const { data: book } = useGetBookByIdQuery(bookId);

	return (
		<BoxContainer className={cx('book-page', className)}>
			{book !== undefined ? (
				<>
					<ProductImage src={book.cover} large className={cx('book-page__image')} />
					<div>
						<Heading size="1" className={cx('book-page__title')}>
							{book.title}
						</Heading>
						<Subtitle className={cx('book-page__author')}>{book.author}</Subtitle>
					</div>
					<Paragraph className={cx('book-page__description')}>{book.description}</Paragraph>
					<Link href="/" className={cx('book-page__home-link')} color="green">
						К списку книг
					</Link>
				</>
			) : (
				<h1>Book is not found</h1>
			)}
		</BoxContainer>
	);
};
