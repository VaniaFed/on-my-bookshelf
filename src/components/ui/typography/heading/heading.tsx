import React from 'react';
import classNames from 'classnames/bind';

import styles from './heading.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Heading: FC<Props> = ({ children, size = '1', className }) => {
	switch (size) {
		case '1':
			return <h1 className={cx('h1', className)}>{children}</h1>;

		case '2':
			return <h2 className={cx('h2', className)}>{children}</h2>;

		case '3':
			return <h3 className={cx('h3', className)}>{children}</h3>;
	}
};
