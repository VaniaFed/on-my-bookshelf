const path = require('path');

module.exports = {
	entry: { app: path.resolve(__dirname, '../', 'src', 'index.tsx') },
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(tsx?)$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.webpack.js', '.js', '.jsx', '.ts', '.tsx', '.json', '.sass', '.scss', '.css'],
	},
};
