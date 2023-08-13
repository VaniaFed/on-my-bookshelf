import React from 'react';
import classNames from 'classnames/bind';

import { Login } from 'components/ui/login';
import { Logo } from 'components/ui/logo';
import { Link } from 'components/ui/link';
import { BoxContainer } from 'components/layouts/box-container';
import { LinksLayout } from 'components/layouts/links-layout';

import styles from './header.module.scss';

import type { FC } from 'react';
import type { Link as TLink } from 'types';
import type { Props } from './props';

const links: TLink[] = [
	{
		text: 'Мои задачи',
		href: '#',
	},
	{
		text: 'Календарь',
		href: '#',
	},
	{
		text: 'Статистика',
		href: '#',
	},
];

const cx = classNames.bind(styles);

export const Header: FC<Props> = ({ className }) => {
	return (
		<header className={cx('header', className)}>
			<BoxContainer size="1168" className={cx('header__container')}>
				<nav className={cx('header__nav')}>
					<Logo href="/#" />
					<LinksLayout className={cx('header__links')} gap="50">
						{links.map((link, key) => (
							<li key={key}>
								<Link href={link.href} smooth>
									{link.text}
								</Link>
							</li>
						))}
					</LinksLayout>
					<Login />
				</nav>
			</BoxContainer>
		</header>
	);
};
