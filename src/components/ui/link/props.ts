import type { LinkHTMLAttributes } from 'react';
import type { Social } from 'types';

export interface Props extends LinkHTMLAttributes<HTMLAnchorElement> {
	isExternal?: boolean;
	children: React.ReactNode;
	level?: 'h1' | 'h2' | 'h3' | 'p-big' | 'p-normal' | 'p-small';
	iconType?: Social;
	color?: 'black' | 'white';
	underline?: boolean;
	smooth?: boolean;
}
