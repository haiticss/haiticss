'use strict';

const chalk = require('chalk'),
      stylelint = require('stylelint');

const linter_options = {
    configFile: '.stylelintrc',
    files: './src/**/*.scss',
    formatter: 'verbose',
    ignoreDisables: false,
    syntax: 'scss'
};

console.log(chalk.bgBlue.bold('Check linter rules'));

stylelint
    .lint(linter_options)
    .then((analysis) => {
        console.log(analysis.output);

        if (process.env.BUILD_ENV === 'travisci') {
            for (let result of analysis.results) {
                if (result.warnings.length) {
                    process.exit(1);
                }
            }
        }
    })
    .catch((error) => {
        console.error(error);

        process.exit(1);
    });