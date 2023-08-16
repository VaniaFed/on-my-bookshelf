import React from 'react';
import classNames from 'classnames/bind';

import styles from './book-page.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const BookPage: FC<Props> = ({ className }) => {
	return <div className={cx('book-page', className)}>book page</div>;
};
