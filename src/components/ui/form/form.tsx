import React from 'react';
import classNames from 'classnames/bind';

import styles from './form.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Form: FC<Props> = ({ children, className, ...rest }) => {
	return (
		<form className={cx('form', className)} {...rest}>
			{children}
		</form>
	);
};
