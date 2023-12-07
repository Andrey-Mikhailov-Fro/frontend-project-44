import getRandomIntInclusive from '../random.js';
import play from '../structure.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

const playPrimeGame = () => {
  const quest = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQuestionAnswer = () => {
    const questions = getRandomIntInclusive(1, 10);
    const correctAnswers = isPrime(questions) ? 'yes' : 'no';

    return [questions, correctAnswers];
  };

  return [getQuestionAnswer, quest];
};

export default () => {
  const [getQuestionAnswer, quest] = playPrimeGame();
  play(getQuestionAnswer, quest);
};
