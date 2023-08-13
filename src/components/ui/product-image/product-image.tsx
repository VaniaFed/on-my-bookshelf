import React from 'react';
import classNames from 'classnames/bind';

import styles from './product-image.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const ProductImage: FC<Props> = ({ src = '', alt, dynamic = false, isLarge, className }) => {
	const basePath = src.length > 0 ? src : 'book-placeholder.png';
	const resultPath = dynamic ? require(`${process.env.STATIC_URL}/${basePath}`) : basePath;
	return (
		<div className={cx('product-image', isLarge && 'product-image_large', className)}>
			<img src={resultPath} alt={alt} />
		</div>
	);
};
