import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { ModalAdd } from 'components/ui/modal/modal-add/modal-add';
import { BoxContainer } from 'components/layouts/box-container';
import { BooksList } from 'components/layouts/books-list/books-list';
import { Input } from 'components/ui/input';
import { Button } from 'components/ui/button';
import { useAppSelector } from 'reduxx/hooks';
import { selectAllBooks } from 'reduxx/slices/book/slice';

import styles from './book-list-page.module.scss';

import type { FC } from 'react';

const cx = classNames.bind(styles);

export const BookListPage: FC<unknown> = () => {
	const [value, setValue] = useState<string>();
	const [modalShown, setModalShown] = useState<boolean>(false);

	const showModal = (): void => {
		setModalShown(true);
	};

	const hideModal = (): void => {
		setModalShown(false);
	};

	const books = useAppSelector(selectAllBooks);

	return (
		<BoxContainer className={cx('book-list-page__content')}>
			<Input type="text" value={value} onChange={() => setValue} placeholder="Найти книгу" />
			<BooksList books={books} />
			<Button variant="positive" className={cx('book-list-page__button')} onClick={showModal}>
				Добавить книгу
			</Button>
			{modalShown && <ModalAdd onClose={hideModal} />}
		</BoxContainer>
	);
};
