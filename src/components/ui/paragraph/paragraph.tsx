import React from 'react';
import classNames from 'classnames/bind';

import styles from './paragraph.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Paragraph: FC<Props> = ({ size = 'regular', children, className }) => {
	const paragraphClass = cx('paragraph', size && `paragraph_size_${size}`, className);
	return <p className={paragraphClass}>{children}</p>;
};
