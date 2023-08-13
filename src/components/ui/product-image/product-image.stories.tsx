import React from 'react';

import { ProductImage } from './product-image';

import type { ComponentStory, Meta } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'ProductImage',
	component: ProductImage,
};

export default meta;

export const PlaceholderImage: ComponentStory<typeof ProductImage> = (args: Props) => <ProductImage {...args} />;
PlaceholderImage.args = {
	className: '',
};

export const Image: ComponentStory<typeof ProductImage> = (args: Props) => <ProductImage {...args} />;
Image.args = {
	className: '',
	src: 'nitse.png',
	alt: 'Ф. Ницше — Так говорил заратустра',
};

export const ImageLarge: ComponentStory<typeof ProductImage> = (args: Props) => <ProductImage {...args} />;
ImageLarge.args = {
	className: '',
	src: 'nitse.png',
	alt: 'Ф. Ницше — Так говорил заратустра',
	isLarge: true,
};
