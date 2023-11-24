import getRandomIntInclusive from '../src/random.js';

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    questions[i] = getRandomIntInclusive(1, 100);
    correctAnswers[i] = (questions[i] % 2) > 0 ? 'no' : 'yes';
  }

  return [questions, correctAnswers];
};
