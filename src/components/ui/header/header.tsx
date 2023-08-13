import React from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/layouts/box-container';
import { Logo } from 'components/ui/logo';

import styles from './header.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Header: FC<Props> = ({ className }) => {
	return (
		<header className={cx('header', className)}>
			<BoxContainer className={cx('header__container')}>
				<nav className={cx('header__nav')}>
					<Logo href="/#" />
				</nav>
			</BoxContainer>
		</header>
	);
};
