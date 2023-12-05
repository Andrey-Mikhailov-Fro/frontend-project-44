import _ from 'lodash';
import getRandomIntInclusive from '../random.js';
import play from '../structure.js';

const gcd = (number1, number2) => {
  const divisorsForNumber1 = [];
  const divisorsForNumber2 = [];

  for (let i = 1; i <= number1; i += 1) {
    if ((number1 % i) === 0) {
      divisorsForNumber1.push(i);
    }
  }

  for (let i = 1; i <= number2; i += 1) {
    if ((number2 % i) === 0) {
      divisorsForNumber2.push(i);
    }
  }

  const commonDivisors = _.intersection(divisorsForNumber1, divisorsForNumber2);
  const maxCommonDivisor = _.max(commonDivisors);
  return maxCommonDivisor;
};

const gcdGame = () => {
  const quest = 'Find the greatest common divisor of given numbers.';

  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const a = getRandomIntInclusive(1, 100);
    const b = getRandomIntInclusive(1, 100);

    questions[i] = `${a} ${b}`;
    correctAnswers[i] = gcd(a, b);
  }

  return [questions, correctAnswers, quest];
};

export default () => {
  const [questions, correctAnswers, quest] = gcdGame();
  play(questions, correctAnswers, quest);
};
