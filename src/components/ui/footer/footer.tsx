import React from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/layouts/box-container';
import { Logo } from 'components/ui/logo';

import styles from './footer.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

export const Footer: FC<Props> = ({ className }) => {
	const cx = classNames.bind(styles);

	return (
		<footer className={cx('footer', className)}>
			<BoxContainer>
				<div className={cx('footer__inner')}>
					<Logo href="/#" />
				</div>
			</BoxContainer>
		</footer>
	);
};
