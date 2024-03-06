let randomNumber;
let maxNumber = 100;

function play(min, max) {
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  let guessCount = 0;

  while (true) {
    const guess = parseInt(prompt(`Guess a number between ${min} and ${max}:`));
    guessCount++;

    if (guess === randomNumber) {
      console.log(`Congratulations! You guessed the number in ${guessCount} attempts.`);
      break;
    } else if (guess < randomNumber) {
      console.log('Too low!');
    } else {
      console.log('Too high!');
    }
  }
}

function setMaxNumber(max) {
  maxNumber = max;
}

module.exports = {
  play,
  setMaxNumber,
};
