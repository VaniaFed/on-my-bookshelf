const path = require('path');

module.exports = {
	resolve: {
		alias: {
			components: path.resolve(__dirname, '../src/components/'),
			ui: path.resolve(__dirname, '../src/components/ui/'),
			reduxx: path.resolve(__dirname, '../src/reduxx/'),
			hooks: path.resolve(__dirname, '../src/hooks/'),
			utils: path.resolve(__dirname, '../src/utils/'),
			static: path.resolve(__dirname, '../src/static/'),
			'types/': path.resolve(__dirname, '../src/types/'),
		},
	},
};
