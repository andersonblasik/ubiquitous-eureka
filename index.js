const yargs = require('yargs');
const game = require('./game');

const argv = yargs
  .command('play', 'Play the guessing game', {
    describe: 'The minimum number for the guess range',
    demandOption: true,
    type: 'number',
  })
  .command('max', 'Specify the maximum number for the guess range', {
    describe: 'The maximum number for the guess range',
    demandOption: true,
    type: 'number',
  })
  .help()
  .alias('h', 'help')
  .argv;

const { command, min, max } = argv;

switch (command) {
  case 'play':
    game.play(min || 1, max || 100);
    break;
  case 'max':
    game.setMaxNumber(max);
    break;
  default:
    console.log('Unknown command');
}
