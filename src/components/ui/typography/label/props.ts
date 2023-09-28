import type { LabelHTMLAttributes } from 'react';

export interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
	required?: boolean;
}
