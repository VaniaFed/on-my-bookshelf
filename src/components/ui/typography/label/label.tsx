import React from 'react';
import classNames from 'classnames/bind';

import styles from './label.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Label: FC<Props> = ({ children, required = false, className, ...rest }) => {
	return (
		<label className={cx('label', required && 'label_required', className)} {...rest}>
			{children}
		</label>
	);
};
