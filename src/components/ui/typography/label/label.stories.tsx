import React from 'react';

import { Label } from './label';

import type { ComponentStory, Meta } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'Label',
	component: Label,
};

export default meta;

export const Default: ComponentStory<typeof Label> = (args: Props) => <Label {...args}>Label</Label>;
Default.args = {
	className: '',
};

export const Required: ComponentStory<typeof Label> = (args: Props) => <Label {...args}>Required label</Label>;
Required.args = {
	className: '',
	required: true,
};
