import React from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/layouts/box-container';
import { LinksLayout } from 'components/layouts/links-layout';
import { Paragraph } from 'components/ui/paragraph';

import { Link } from '../link';

import styles from './footer.module.scss';

import type { FC } from 'react';
import type { Link as TLink } from 'types';
import type { Props } from './props';

export const Footer: FC<Props> = ({ className }) => {
	const cx = classNames.bind(styles);

	const links: TLink[] = [
		{
			text: 'instagram',
			href: 'https://www.instagram.com',
			iconType: 'inst',
		},
		{
			text: 'facebook',
			href: 'https://www.facebook.com',
			iconType: 'fb',
		},
		{
			text: 'vkontakte',
			href: 'https://www.vk.com',
			iconType: 'vk',
		},
	];

	return (
		<footer className={cx('footer', className)}>
			<BoxContainer>
				<div className={cx('footer__socials')}>
					<Paragraph className={cx('footer__paragraph')}>Наши социальные сети</Paragraph>
					<LinksLayout className={cx('footer__links')} gap="25">
						{links.map((link, key) => (
							<li key={key}>
								<Link href={link.href} isExternal iconType={link.iconType} color="white">
									{link.text}
								</Link>
							</li>
						))}
					</LinksLayout>
				</div>
			</BoxContainer>
		</footer>
	);
};
