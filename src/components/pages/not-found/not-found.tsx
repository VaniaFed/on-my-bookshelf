import React from 'react';
import classNames from 'classnames/bind';

import { Heading } from 'components/ui/heading';
import { Paragraph } from 'components/ui/paragraph';

import styles from './not-found.module.scss';

import type { FC } from 'react';

const cx = classNames.bind(styles);

export const NotFound: FC<unknown> = () => {
	return (
		<div className={cx('not-found')}>
			<div className={cx('not-found__content')}>
				<Heading size="1">Oops!</Heading>
				<Paragraph>То, чего вы ищите, не ищется</Paragraph>
			</div>
		</div>
	);
};
