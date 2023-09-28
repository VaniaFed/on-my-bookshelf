import React from 'react';

import { ImageLoader } from './image-loader';

import type { ComponentStory, Meta } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'ImageLoader',
	component: ImageLoader,
};

export default meta;

export const Default: ComponentStory<typeof ImageLoader> = (args: Props) => <ImageLoader {...args} />;
Default.args = {
	className: '',
};
