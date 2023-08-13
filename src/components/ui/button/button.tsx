import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './button.module.scss';

import type { Props } from './props';

const cx = classNames.bind(styles);

export const Button = forwardRef<HTMLButtonElement, Props>(
	({ children, variant = 'primary', className, ...rest }, ref) => {
		return (
			<button className={cx('button', `button_${variant}`, className)} {...rest} ref={ref}>
				{children}
			</button>
		);
	}
);

Button.displayName = 'Button';
