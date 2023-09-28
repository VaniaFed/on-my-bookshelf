import React from 'react';
import classNames from 'classnames/bind';

import styles from './close-btn.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const CloseBtn: FC<Props> = ({ onClose, className }) => {
	return (
		<img
			className={cx('close-btn', className)}
			src={require(`${process.env.STATIC_URL}/cross-clear.svg`)}
			alt="close"
			onClick={onClose}
		/>
	);
};
