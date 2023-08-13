const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	output: {
		path: path.resolve(__dirname, '../public'),
		publicPath: '/',
		clean: true,
		filename: '[name].js',
		assetModuleFilename: 'assets/[name][ext]',
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].[chunkhash].css',
		}),
		new ESLintPlugin(),
		new StylelintPlugin(),
	],
};
