import React from 'react';
import classNames from 'classnames/bind';

import { Link } from 'components/ui/link';

import styles from './logo.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Logo: FC<Props> = ({ href, className }) => {
	return (
		<Link underline={false} className={cx('logo', className)} href={href}>
			<h1 className={cx('logo__text')}>На моей книжной полке</h1>
		</Link>
	);
};
