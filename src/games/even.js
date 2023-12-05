import getRandomIntInclusive from '../random.js';
import play from '../structure.js';

const evenGame = () => {
  const quest = 'Answer "yes" if the number is even, otherwise answer "no".';

  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    questions[i] = getRandomIntInclusive(1, 100);
    correctAnswers[i] = (questions[i] % 2) > 0 ? 'no' : 'yes';
  }

  return [questions, correctAnswers, quest];
};

export default () => {
  const [questions, correctAnswers, quest] = evenGame();
  play(questions, correctAnswers, quest);
};
