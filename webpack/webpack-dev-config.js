const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const path = require('path');

module.exports = {
	target: 'web',
	devtool: false,
	module: {
		rules: [
			{
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
			},
			{
				test: /\.(jpe?g|png|webp|gif|svg)$/,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../', 'src/', 'index.html'),
			filename: 'index.html',
		}),
	],
	mode: 'development',
};
