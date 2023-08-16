import type { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label?: string;
	image?: string;
	errMessage?: string;
	onImageChange: (imgURL: string) => void;
	className?: string;
}
