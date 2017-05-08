// some-node-thing.js
let importResolve = require('import-resolve'),
    files = [
        'src/settings/_settings__core',
        'src/settings/_settings__config',
        'src/settings/_settings__core-functions',
        'src/foundations/_foundations',
        'src/tools/_tools',
        'src/generic/_generic',
        'src/elements/_elements',
        'src/objects/_objects',
        'src/animations/_animations',
        'src/utilities/_utilities'
    ],
    file;

for (file of files) {
    let outputFile = "src-resolved/" + file.replace(/^.*[\\\/]/, '') + ".scss";
    importResolve({
        "ext": "scss",
        "pathToMain": file,
        "output": outputFile
    });
}
