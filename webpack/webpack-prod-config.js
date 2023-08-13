const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	target: 'browserslist',
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
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
				test: /\.(jpe?g|png|webp|gif|svg)$/i,
				use: [
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
							},
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.9],
								speed: 4,
							},
							gifsicle: {
								interlaced: false,
							},
							webp: {
								quality: 75,
							},
						},
					},
				],
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../', 'src', 'index.html'),
			filename: 'index.html',
			minify: {
				collapseWhitespace: true,
			},
		}),
		new webpack.ids.DeterministicChunkIdsPlugin({
			maxLength: 5,
		}),
	],
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin({
				test: /\.s?css$/i,
				parallel: true,
			}),
			new TerserPlugin({
				test: /\.js$/i,
				parallel: true,
			}),
		],
		chunkIds: 'total-size',
		concatenateModules: true,
		emitOnErrors: true,
		flagIncludedChunks: true,
		innerGraph: false,
		mangleExports: true,
		mangleWasmImports: true,
		mergeDuplicateChunks: false,
		moduleIds: 'deterministic',
		nodeEnv: 'production',
	},
};
