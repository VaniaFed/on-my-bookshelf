import { useEffect, useState } from 'react';

import type { ChangeEvent } from 'react';

const imageMimeType = /image\/(png|jpg|jpeg)/i;

interface UseUrlImage {
	fileDataURL: string;
	image?: File;
	handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function useImageUrl(onImageChange: (imageUrl: string) => void, defaultImageURL: string): UseUrlImage {
	const [image, setImage] = useState<File>();
	const [fileDataURL, setFileDataURL] = useState<string>(defaultImageURL);

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
		if (!e.target.files) return;

		const image = e.target.files[0];

		if (!image.type.match(imageMimeType)) {
			console.warn('Image mime type is not valid');
			return;
		}

		if (image) {
			setImage(image);
		}
	};

	useEffect(() => {
		let fileReader: FileReader;
		let isCancel = false;

		if (image) {
			fileReader = new FileReader();
			fileReader.onload = (e: ProgressEvent<FileReader>) => {
				const { result } = e.target as any;
				if (result && !isCancel) {
					setFileDataURL(result);
					onImageChange(result);
				}
			};
			fileReader.readAsDataURL(image);
		}

		return () => {
			isCancel = true;
			if (fileReader && fileReader.readyState === 1) {
				fileReader.abort();
			}
		};
	}, [image]);

	useEffect(() => {
		if (!defaultImageURL) {
			return;
		}

		setFileDataURL(defaultImageURL);
	}, [defaultImageURL]);

	return {
		fileDataURL,
		image,
		handleImageChange,
	};
}
