const yargs = require('yargs/yargs');
const fs = require('fs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv)).command(
  'create component [path]',
  'create a new component',
  (yargs) => {
    yargs.positional('path', {
      describe: 'path where the component is saved',
      default: '.',
    });
  },
  (argv) => {
    fs.mkdirSync(argv.path, {
      recursive: true,
    });
  }
).argv;
