import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ModalAdd } from 'components/ui/modal/modal-add/modal-add';
import { BoxContainer } from 'components/layouts/box-container';
import { BooksList } from 'components/layouts/books-list/books-list';
import { Input } from 'components/ui/input';
import { Button } from 'components/ui/button';
import { Subtitle } from 'components/ui/typography/subtitle';
import { Heading } from 'components/ui/typography/heading';
import { useAppSelector } from 'reduxx/hooks';
import { useModal } from 'hooks/use-modal';
import { selectAllBooks } from 'reduxx/slices/book/slice';

import styles from './book-list-page.module.scss';

import type { FC } from 'react';

const cx = classNames.bind(styles);

export const BookListPage: FC<unknown> = () => {
	const navigate = useNavigate();
	const { isModalShown, showModal, hideModal } = useModal();
	const defaultFilter = useSearchParams()[0].get('search');
	const [filter, setFilter] = useState<string>(defaultFilter || '');

	const resetFilter = (): void => {
		setFilter('');
	};

	const books = useAppSelector(selectAllBooks).filter(
		(book) => book.title.includes(filter) || book.author.includes(filter)
	);

	useEffect(() => {
		navigate(`?search=${filter}`);
	}, [filter]);

	const isFilterNotWork = !books.length && filter;

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
			<Heading size="1">Книжечки ({books.length})</Heading>
			<BooksList books={books} />
			{isFilterNotWork && <Subtitle light>Ничего не найдено.</Subtitle>}
			<div className={cx('book-list-page__button-group')}>
				<Button variant="positive" className={cx('book-list-page__button')} onClick={showModal}>
					Добавить книгу
				</Button>
				{isFilterNotWork && (
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
