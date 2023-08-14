import React from 'react';

import { Paragraph } from './paragraph';

import type { ComponentStory, Meta } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'Paragraph',
	component: Paragraph,
};

export default meta;

export const Default: ComponentStory<typeof Paragraph> = (args: Props) => <Paragraph {...args} />;
Default.args = {
	className: '',
	children: 'Paragraph lorem ipsum dolor sit amet',
};
