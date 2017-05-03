const path = require('path');

const chalk = require('chalk'),
      sass = require('node-sass');

console.log(chalk.bgBlue.bold('Check SASS compile'), '\n');

function compileFile(filePath) {
    sass.render({
        file: filePath
    }, (error, result) => {
        if (error) {
            console.log(chalk.red.bold.underline('SASS COMPILE ERROR!'));

            console.log(error.message);
            console.log(error.line);

            if (process.env.BUILD_ENV === 'travisci') {
                process.exit(1);
            }
        }
        else {
            console.log(chalk.underline(`${result.stats.includedFiles.length} sources checked (compiling ${path.resolve(filePath)})`));
            for (let file of result.stats.includedFiles) {
                console.log('', chalk.green(file));
            }
            console.log('\n');
        }
    });
}


compileFile('./src/haiticss.scss');
compileFile('./src/haiticss--scoped.scss');
