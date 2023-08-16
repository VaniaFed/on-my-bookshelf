import React from 'react';
import classNames from 'classnames/bind';

import { ProductImage } from '../product-image/product-image';
import { Heading } from '../typography/heading';
import { Subtitle } from '../typography/subtitle';
import { Link } from '../link';

import styles from './book-item.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const BookItem: FC<Props> = ({ title, author, src, alt, className }) => {
	return (
		<div className={cx('book-item', className)}>
			<ProductImage src={src} alt={alt} className={cx('book-item__image')} />
			<div className={cx('book-item__content')}>
				<div>
					<Link href="#" level="h2">
						<Heading size="2">{title}</Heading>
					</Link>
					<Subtitle className={cx('book-item__subtitle')}>{author}</Subtitle>
				</div>
				<div className={cx('book-item__links')}>
					<Link iconType="edit" />
					<Link iconType="go" />
				</div>
			</div>
		</div>
	);
};
