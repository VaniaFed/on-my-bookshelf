import React, { forwardRef, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { Paragraph } from '../typography/paragraph';
import { ProductImage } from '../product-image/product-image';
import { Label } from '../typography/label';

import styles from './image-loader.module.scss';

import type { ChangeEvent } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

const imageMimeType = /image\/(png|jpg|jpeg)/i;

export const ImageLoader = forwardRef<HTMLInputElement, Props>(
	({ id, label = '', errMessage = '', className, onImageChange, ...rest }, ref) => {
		const [file, setFile] = useState<File>();
		const [fileDataURL, setFileDataURL] = useState(null);

		const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
			if (!e.target.files) return;

			const file = e.target.files[0];
			if (!file.type.match(imageMimeType)) {
				console.warn('Image mime type is not valid');
				return;
			}
			if (file) {
				setFile(file);
			}
		};

		useEffect(() => {
			let fileReader: FileReader;
			let isCancel = false;

			// TODO: в хук
			if (file) {
				fileReader = new FileReader();
				fileReader.onload = (e: ProgressEvent<FileReader>) => {
					const { result } = e.target as any;
					if (result && !isCancel) {
						setFileDataURL(result);
						onImageChange(result);
					}
				};
				fileReader.readAsDataURL(file);
			}

			return () => {
				isCancel = true;
				if (fileReader && fileReader.readyState === 1) {
					fileReader.abort();
				}
			};
		}, [file]);

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
				{file && fileDataURL && (
					<ProductImage src={fileDataURL} alt={file.name} className={cx('image-loader__preview')} />
				)}
				<Paragraph>Нажмите, чтобы выбрать изображение</Paragraph>
			</label>
		);
	}
);

ImageLoader.displayName = 'ImageLoader';
