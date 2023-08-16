const path = require('path');

const webpack = require('webpack');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	webpackFinal: async (config, { configType }) => {
		config.module.rules.push({
			test: /\.tsx?$/,
			exclude: /node_modules/,
			use: ['ts-loader'],
		});
		config.module.rules.push({
			test: /\.scss$/i,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						modules: true,
						sourceMap: true,
					},
				},
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [['postcss-preset-env']],
						},
					},
				},
				'sass-loader',
			],
		});
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.STATIC_URL': JSON.stringify(path.resolve(__dirname, '..', 'src', 'static')),
			})
		);
		config.resolve.alias = {
			...config.resolve.alias,
			components: path.resolve(__dirname, '../src/components/'),
			ui: path.resolve(__dirname, '../src/components/ui/'),
			hooks: path.resolve(__dirname, '../src/hooks/'),
			'~redux': path.resolve(__dirname, '../src/redux/'),
			utils: path.resolve(__dirname, '../src/utils/'),
			static: path.resolve(__dirname, '../src/static/'),
			types: path.resolve(__dirname, '../src/types/'),
		};

		return config;
	},
};
