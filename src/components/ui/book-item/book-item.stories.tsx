import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { BookItem } from './book-item';

import type { ComponentStory, Meta } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'BookItem',
	component: BookItem,
	decorators: [withRouter],
};

export default meta;

export const Default: ComponentStory<typeof BookItem> = (args: Props) => <BookItem {...args} />;
Default.args = {
	className: '',
	title: 'Так говорил заратустра',
	author: 'Ницше Фридрих Вильгельм',
	src: 'nitse.png',
};
