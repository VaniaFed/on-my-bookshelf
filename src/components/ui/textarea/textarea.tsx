import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './textarea.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Textarea: FC<Props> = forwardRef<HTMLTextAreaElement, Props>(({ className, ...rest }, ref) => {
	return <textarea className={cx('textarea', className)} ref={ref} {...rest} />;
});

Textarea.displayName = 'Textarea';
