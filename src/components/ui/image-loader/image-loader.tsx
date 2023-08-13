import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { Paragraph } from '../typography/paragraph';
import { ProductImage } from '../product-image/product-image';

import styles from './image-loader.module.scss';

import type { ChangeEvent, FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

const imageMimeType = /image\/(png|jpg|jpeg)/i;

export const ImageLoader: FC<Props> = ({ className, onFileChange }) => {
	const [file, setFile] = useState<File>();
	const [fileDataURL, setFileDataURL] = useState(null);

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
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

		if (file) {
			fileReader = new FileReader();
			fileReader.onload = (e: ProgressEvent<FileReader>) => {
				const { result } = e.target as any;
				if (result && !isCancel) {
					setFileDataURL(result);
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

	useEffect(() => {
		if (file) {
			onFileChange(file);
		}
	}, [file]);

	return (
		<label className={cx('image-loader', className)}>
			<input type="file" accept="image/*" onChange={handleFileChange} className={cx('image-loader__input')} />
			{file && fileDataURL && (
				<ProductImage src={fileDataURL} alt={file.name} className={cx('image-loader__preview')} />
			)}
			<Paragraph>Нажмите, чтобы выбрать изображение</Paragraph>
		</label>
	);
};
