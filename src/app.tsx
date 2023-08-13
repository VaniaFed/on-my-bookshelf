import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { BookListPage } from 'components/pages/book-list-page';
import { NotFound } from 'components/pages/not-found';
import { PageLayout } from 'components/layouts/page-layout';

import type { FC } from 'react';

export const App: FC<unknown> = () => {
	return (
		<Routes>
			<Route path="/" element={<PageLayout />}>
				<Route index element={<BookListPage />} />
				<Route path="/not-found" element={<NotFound />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};
