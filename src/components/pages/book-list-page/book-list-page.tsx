import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/layouts/box-container';
import { BooksList } from 'components/layouts/books-list/books-list';
import { Input } from 'components/ui/input';
import { Button } from 'components/ui/button';

import styles from './book-list-page.module.scss';

import type { FC } from 'react';

export interface Book {
	title: string;
	author: string;
	src: string;
}

const books: Book[] = [
	{
		title: 'так говорил заратустра lkdsfjdlk kldjkldjg lkjdlfkjdslk fjlksdfjlksdjflksdfdsklfjdsklf',
		author: 'Ф. Ницше',
		src: 'nitse.png',
	},
	{
		title: 'так говорил заратустра',
		author: 'Ф. Ницше',
		src: 'nitse.png',
	},
	{
		title: 'так говорил заратустра',
		author: 'Ф. Ницше dsfjklds jlkdsjfkl sdjfklds jsdklfj lsdkjfklsdj kldsfjsdl',
		src: 'nitse.png',
	},
	{
		title: 'так говорил заратустра',
		author: 'Ф. Ницше',
		src: 'nitse.png',
	},
	{
		title: 'так говорил заратустра',
		author: 'Ф. Ницше',
		src: 'nitse.png',
	},
	{
		title: 'так говорил заратустра',
		author: 'Ф. Ницше',
		src: 'nitse.png',
	},
];

const cx = classNames.bind(styles);

export const BookListPage: FC<unknown> = () => {
	const [value, setValue] = useState<string>();
	return (
		<BoxContainer className={cx('book-list-page__content')}>
			<Input type="text" value={value} onChange={() => setValue} placeholder="Найти книгу" />
			<BooksList books={books} />
			<Button variant="positive" className={cx('book-list-page__button')}>
				Добавить книгу
			</Button>
		</BoxContainer>
	);
};
