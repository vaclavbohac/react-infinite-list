var _ = require('lodash');
var webpack = require('webpack');
var getWebpackConfig = require('./webpack.config.js');

module.exports = function createTestConfig(options) {
    var testConfig = _.assign(getWebpackConfig(), {
        devtool: 'cheap-module-eval-source-map'
    });

    delete testConfig.entry;
    delete testConfig.output;

    return testConfig;
};
