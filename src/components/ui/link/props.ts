import type { LinkHTMLAttributes } from 'react';

export interface Props extends LinkHTMLAttributes<HTMLAnchorElement> {
	isExternal?: boolean;
	children: React.ReactNode;
	level?: 'h1' | 'h2' | 'paragraph';
	color?: 'black' | 'white';
	underline?: boolean;
	smooth?: boolean;
}
