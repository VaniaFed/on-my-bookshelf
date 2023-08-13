import React from 'react';
import classNames from 'classnames/bind';

import styles from './product-image.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const ProductImage: FC<Props> = ({ src = '', alt, isLarge, className }) => {
	const imgPath = src.length > 0 ? src : 'book-placeholder.png';
	return (
		<div className={cx('product-image', isLarge && 'product-image_large', className)}>
			<img src={require(`${process.env.STATIC_URL}/${imgPath}`)} alt={alt} />
		</div>
	);
};
