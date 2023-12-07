import getRandomIntInclusive from '../random.js';
import play from '../structure.js';

const playEvenGame = () => {
  const quest = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQuestionAnswer = () => {
    const questions = getRandomIntInclusive(1, 100);
    const correctAnswers = (questions % 2) > 0 ? 'no' : 'yes';

    return [questions, correctAnswers];
  };

  return [getQuestionAnswer, quest];
};

export default () => {
  const [getQuestionAnswer, quest] = playEvenGame();
  play(getQuestionAnswer, quest);
};
