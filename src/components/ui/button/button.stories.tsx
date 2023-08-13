import React from 'react';

import { Button } from './button';

import type { ComponentStory, Meta } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'Button',
	component: Button,
};

export default meta;

const logging = (): void => {
	console.log('Hello, warlord');
};

export const Primary: ComponentStory<typeof Button> = (args: Props) => (
	<Button onClick={logging} {...args}>
		hi
	</Button>
);
export const Secondary: ComponentStory<typeof Button> = (args: Props) => (
	<Button onClick={logging} variant="secondary" {...args} />
);
export const More: ComponentStory<typeof Button> = (args: Props) => (
	<Button onClick={logging} variant="more" {...args} />
);
export const Small: ComponentStory<typeof Button> = (args: Props) => (
	<Button onClick={logging} variant="small" {...args} />
);
