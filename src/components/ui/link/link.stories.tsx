import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { Link } from './link';

import type { ComponentStory, Meta } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'Link',
	component: Link,
	decorators: [withRouter],
};

export default meta;

export const Default: ComponentStory<typeof Link> = (args: Props) => <Link href="#">Default link</Link>;
export const H1: ComponentStory<typeof Link> = (args: Props) => (
	<Link href="#" level="h1">
		H1 Link Level
	</Link>
);

export const H2: ComponentStory<typeof Link> = (args: Props) => (
	<Link href="#" level="h2">
		H2 Link Level
	</Link>
);

export const Paragraph: ComponentStory<typeof Link> = (args: Props) => (
	<Link href="#" level="paragraph">
		Paragraph big Link Level
	</Link>
);

export const WhiteLink: ComponentStory<typeof Link> = (args: Props) => (
	<div style={{ background: '#000' }}>
		<Link href="#" level="h1" color="white">
			White H1 Link
		</Link>
	</div>
);

export const BlackLink: ComponentStory<typeof Link> = (args: Props) => (
	<Link href="#" level="h1" color="black">
		Black H1 Link
	</Link>
);

export const IconLinkGo: ComponentStory<typeof Link> = (args: Props) => <Link href="#" iconType="go" />;
export const IconLinkEdit: ComponentStory<typeof Link> = (args: Props) => <Link href="#" iconType="edit" />;
