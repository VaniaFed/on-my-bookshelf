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

export const Default: ComponentStory<typeof Button> = (args: Props) => (
	<Button onClick={logging} {...args}>
		Default button
	</Button>
);

export const Positive: ComponentStory<typeof Button> = (args: Props) => (
	<Button onClick={logging} variant="positive" {...args}>
		Positive
	</Button>
);

export const Attention: ComponentStory<typeof Button> = (args: Props) => (
	<Button onClick={logging} variant="attention" {...args}>
		Attention
	</Button>
);

export const Negative: ComponentStory<typeof Button> = (args: Props) => (
	<Button onClick={logging} variant="negative" {...args}>
		Negative
	</Button>
);

export const Secondary: ComponentStory<typeof Button> = (args: Props) => (
	<Button onClick={logging} variant="secondary" {...args}>
		Secondary
	</Button>
);
