import React from 'react';
import classNames from 'classnames/bind';

import styles from './box-container.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const BoxContainer: FC<Props> = ({ children, className }) => {
	return <div className={cx('box-container', className)}>{children}</div>;
};
