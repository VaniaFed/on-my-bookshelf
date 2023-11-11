import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ModalAdd } from 'components/ui/modal/modal-add/modal-add';
import { BoxContainer } from 'components/layouts/box-container';
import { BooksList } from 'components/layouts/books-list/books-list';
import { Input } from 'components/ui/input';
import { Button } from 'components/ui/button';
import { Subtitle } from 'components/ui/typography/subtitle';
import { Heading } from 'components/ui/typography/heading';
import { useModal } from 'hooks/use-modal';
import { fetchAllBooks } from 'reduxx/slices/book/asyncActions';
import { useAppDispatch } from 'reduxx/hooks';
import { selectAllBooks } from 'reduxx/slices/book/selectors';
import { filterBooks } from 'utils/filter-books';

import styles from './book-list-page.module.scss';

import type { FC } from 'react';

const cx = classNames.bind(styles);

export const BookListPage: FC<unknown> = () => {
	const navigate = useNavigate();
	const { isModalShown, showModal, hideModal } = useModal();

	const books = useSelector(selectAllBooks);

	const defaultFilter = useSearchParams()[0].get('search');
	const [filter, setFilter] = useState<string>(defaultFilter || '');

	const resetFilter = (): void => {
		setFilter('');
	};

	const filteredBooks = filterBooks(books, filter);

	useEffect(() => {
		navigate(`?search=${filter}`);
	}, [filter]);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchAllBooks());
	}, []);

	const emptyFilter = !filteredBooks.length && filter;

	return (
		<BoxContainer className={cx('book-list-page__content')}>
			<Input
				type="text"
				value={filter}
				onChange={(e) => {
					setFilter(e.target.value);
				}}
				placeholder="Найти книгу"
			/>
			<Heading size="1">Книжечки ({filteredBooks.length})</Heading>
			<BooksList books={filteredBooks} />
			{emptyFilter && <Subtitle light>Ничего не найдено.</Subtitle>}
			<div className={cx('book-list-page__button-group')}>
				<Button variant="positive" className={cx('book-list-page__button')} onClick={showModal}>
					Добавить книгу
				</Button>
				{emptyFilter && (
					<>
						<Button variant="secondary" className={cx('book-list-page__button')} onClick={resetFilter}>
							Сбросить поиск?
						</Button>
					</>
				)}
			</div>
			{isModalShown && <ModalAdd onClose={hideModal} />}
		</BoxContainer>
	);
};
