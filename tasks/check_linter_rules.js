'use strict';

const stylelint = require('stylelint');


const linter_options = {
    configFile: '.stylelintrc',
    files: './src/**/*.scss',
    formatter: 'verbose',
    ignoreDisables: false,
    syntax: 'scss'
};

stylelint
    .lint(linter_options)
    .then((analysis) => {
        console.log(analysis.output);

        for (let result of analysis.results) {
            if (result.warnings.length) {
                process.exit(1);
            }
        }

        process.exit(0);
    })
    .catch((error) => {
        console.error(error);

        process.exit(1);
    });