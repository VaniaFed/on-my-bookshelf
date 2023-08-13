import type { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLElement> {
	size?: 'small' | 'regular' | 'big';
}
