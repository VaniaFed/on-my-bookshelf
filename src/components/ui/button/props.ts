import type { ButtonHTMLAttributes } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'positive' | 'attention' | 'negative' | 'secondary';
}
