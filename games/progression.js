import getRandomIntInclusive from '../src/random.js';

export default () => {
  console.log('What number is missing in the progression?');

  const questions = [[], [], []];
  const correctAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    let last = getRandomIntInclusive(1, 10);
    const step = getRandomIntInclusive(1, 5);
    for (let j = 0; j < 10; j += 1) {
      questions[i][j] = last;
      last += step;
    }

    const chooseNumber = getRandomIntInclusive(0, 9);
    const chosenAnswer = questions[i][chooseNumber];
    questions[i][chooseNumber] = '..';
    correctAnswers[i] = chosenAnswer;
  }

  return [questions, correctAnswers];
};
