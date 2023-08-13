const { merge } = require('webpack-merge');

const baseConfig = require('./webpack/webpack-config');
const appConfig = require('./webpack/webpack-app-config');
const devConfig = require('./webpack/webpack-dev-config');
const devserverConfig = require('./webpack/webpack-devserver-config');
const aliasConfig = require('./webpack/webpack-alias-config');

module.exports = merge([baseConfig, appConfig, devConfig, devserverConfig, aliasConfig]);
