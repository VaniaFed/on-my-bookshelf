import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLayout } from 'components/layouts/page-layout';
import { TodoPage } from 'components/pages/book-list/todo-page';
import { NotFound } from 'components/pages/not-found';

import type { FC } from 'react';

export const App: FC<unknown> = () => {
	return (
		<Routes>
			<Route path="/" element={<PageLayout />}>
				<Route index element={<TodoPage />} />
				<Route path="/not-found" element={<NotFound />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};
