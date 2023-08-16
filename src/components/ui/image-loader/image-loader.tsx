import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';

import { useImageUrl } from 'hooks/use-image-url';

import { Paragraph } from '../typography/paragraph';
import { ProductImage } from '../product-image/product-image';
import { Label } from '../typography/label';

import styles from './image-loader.module.scss';

import type { Props } from './props';

const cx = classNames.bind(styles);

export const ImageLoader = forwardRef<HTMLInputElement, Props>(
	({ id, label = '', errMessage = '', className, defaultImage = '', onImageChange, ...rest }, ref) => {
		const { fileDataURL, image, handleImageChange } = useImageUrl(onImageChange, defaultImage);

		return (
			<label className={cx('image-loader', className)}>
				{label?.length > 0 && (
					<Label required htmlFor={id}>
						{label}
					</Label>
				)}
				<input
					type="file"
					accept="image/*"
					className={cx('image-loader__input')}
					ref={ref}
					{...rest}
					onChange={handleImageChange}
				/>
				{fileDataURL && (
					<ProductImage
						src={fileDataURL}
						alt={image ? image.name : ''}
						className={cx('image-loader__preview')}
					/>
				)}
				<Paragraph>Нажмите, чтобы выбрать изображение</Paragraph>
			</label>
		);
	}
);

ImageLoader.displayName = 'ImageLoader';
