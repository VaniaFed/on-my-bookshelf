import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './input.module.scss';

import type { Props } from './props';

const cx = classNames.bind(styles);

export const Input = forwardRef<HTMLInputElement, Props>(({ solid = false, className, ...rest }, ref) => {
	return <input className={cx('input', solid && 'input_solid', className)} {...rest} ref={ref} />;
});

Input.displayName = 'Input';
