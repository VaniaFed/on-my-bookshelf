import React from 'react';

import { Input } from './input';

import type { Meta, ComponentStory } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'Input',
	component: Input,
};

export default meta;
export const Default: ComponentStory<typeof Input> = (args: Props) => <Input {...args} />;
Default.args = {
	className: '',
};
