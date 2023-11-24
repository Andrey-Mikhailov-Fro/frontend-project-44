import getRandomIntInclusive from '../src/random.js';

export default () => {
  console.log('Answer "yes" if the number is prime. Otherwise answer "no".');

  const questions = [];
  const correctAnswers = [];

  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  };

  for (let i = 0; i < 3; i += 1) {
    questions[i] = getRandomIntInclusive(1, 10);
    correctAnswers[i] = isPrime(questions[i]) ? 'yes' : 'no';
  }

  return [questions, correctAnswers];
};
