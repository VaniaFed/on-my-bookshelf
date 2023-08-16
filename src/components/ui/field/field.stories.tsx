import React from 'react';

import { Input } from '../input';
import { Textarea } from '../textarea';
import { ImageLoader } from '../image-loader/image-loader';

import { Field } from './field';

import type { ComponentStory, Meta } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'Field',
	component: Field,
};

export default meta;

export const Default: ComponentStory<typeof Field> = (args: Props) => <Field {...args} />;
Default.args = {
	className: '',
	children: <Input />,
};

export const WithLabel: ComponentStory<typeof Field> = (args: Props) => <Field {...args} />;
WithLabel.args = {
	className: '',
	label: 'With Label',
	id: 'withLabel',
	children: <Input />,
};

export const Required: ComponentStory<typeof Field> = (args: Props) => <Field {...args} />;
Required.args = {
	className: '',
	label: 'With Label',
	id: 'withLabel',
	required: true,
	children: <Input />,
};

export const WithErrMessage: ComponentStory<typeof Field> = (args: Props) => <Field {...args} />;
WithErrMessage.args = {
	className: '',
	label: 'With Label',
	id: 'withLabel',
	required: true,
	errMessage: 'Typical form error',
	children: <Input />,
};

export const FieldTextArea: ComponentStory<typeof Field> = (args: Props) => <Field {...args} />;
FieldTextArea.args = {
	className: '',
	label: 'With Label',
	id: 'withLabel',
	children: <Textarea />,
};

export const FieldImageLoader: ComponentStory<typeof Field> = (args: Props) => <Field {...args} />;
FieldImageLoader.args = {
	className: '',
	label: 'With Label',
	id: 'withLabel',
	children: (
		<ImageLoader
			id="test"
			value="typical value"
			onImageChange={() => {
				console.log('test log');
			}}
		/>
	),
};
