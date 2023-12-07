import _ from 'lodash';
import getRandomIntInclusive from '../random.js';
import play from '../structure.js';

const getGcd = (number1, number2) => {
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

const playGcdGame = () => {
  const quest = 'Find the greatest common divisor of given numbers.';

  const getQuestionAnswer = () => {
    const a = getRandomIntInclusive(1, 100);
    const b = getRandomIntInclusive(1, 100);

    const questions = `${a} ${b}`;
    const correctAnswers = getGcd(a, b);

    return [questions, correctAnswers];
  };

  return [getQuestionAnswer, quest];
};

export default () => {
  const [getQuestionAnswer, quest] = playGcdGame();
  play(getQuestionAnswer, quest);
};
