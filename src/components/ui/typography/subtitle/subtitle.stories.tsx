import React from 'react';

import { Subtitle } from './subtitle';

import type { ComponentStory, Meta } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'Subtitle',
	component: Subtitle,
};

export default meta;

export const Default: ComponentStory<typeof Subtitle> = (args: Props) => <Subtitle {...args} />;
Default.args = {
	className: '',
	children: 'Subtitle text',
};

export const Light: ComponentStory<typeof Subtitle> = (args: Props) => <Subtitle {...args} />;
Light.args = {
	className: '',
	children: 'Subtitle text light',
	light: true,
};
