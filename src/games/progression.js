import getRandomIntInclusive from '../random.js';
import play from '../structure.js';

const progressionGame = () => {
  const quest = 'What number is missing in the progression?';

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

  return [questions, correctAnswers, quest];
};

export default () => {
  const [questions, correctAnswers, quest] = progressionGame();
  play(questions, correctAnswers, quest);
};
