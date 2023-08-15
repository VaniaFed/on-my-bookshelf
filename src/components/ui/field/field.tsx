import React from 'react';
import classNames from 'classnames/bind';

import { Label } from '../typography/label';
import { Subtitle } from '../typography/subtitle';

import styles from './field.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Field: FC<Props> = ({ children, id, label = '', required, errMessage = '', className }) => {
	return (
		<div className={cx('field', className)}>
			{label?.length > 0 && (
				<Label required={required} htmlFor={id} className={cx('field__label')}>
					{label}
				</Label>
			)}
			{children}
			{errMessage.length > 0 && (
				<Subtitle light className={cx('field__error')}>
					{errMessage}
				</Subtitle>
			)}
		</div>
	);
};
