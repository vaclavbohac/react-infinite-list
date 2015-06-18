var webpack = require('webpack');

var webpackDistConfig = require('./webpack.dist.config.js');
var webpackDevConfig = require('./webpack.dev.config.js');
var webpackTestConfig = require('./webpack.test.config.js');

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        karma: {
            options: {
                configFile: 'karma.conf.js',
                singleRun: grunt.option('ci')
            },
            unit: {}
        },

        webpack: {
            options: grunt.config.get('webpackOptions'),
            dist: webpackTestConfig
        },

        test: {
            unit: {}
        }
    });

    grunt.registerMultiTask('test', function () {
        var tasks = ['karma:unit:start'];

        grunt.task.run(tasks);
    });
};
