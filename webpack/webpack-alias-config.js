const path = require('path');

module.exports = {
	resolve: {
		alias: {
			components: path.resolve(__dirname, '../src/components/'),
			ui: path.resolve(__dirname, '../src/components/ui/'),
			features: path.resolve(__dirname, '../src/features/'),
			services: path.resolve(__dirname, '../src/services/'),
			utils: path.resolve(__dirname, '../src/utils/'),
			static: path.resolve(__dirname, '../src/static/'),
			'types/': path.resolve(__dirname, '../src/types/'),
		},
	},
};
