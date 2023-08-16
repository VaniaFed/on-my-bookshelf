import React from 'react';
import classNames from 'classnames/bind';

import styles from './product-image.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const ProductImage: FC<Props> = ({ src, alt, large, className }) => {
	const placeholderImage = require(`${process.env.STATIC_URL}/book-placeholder.png`);
	const finalImage = src || placeholderImage;
	return (
		<div className={cx('product-image', large && 'product-image_large', className)}>
			{finalImage && <img src={finalImage} alt={alt} className={cx('product-image__img')} />}
		</div>
	);
};
