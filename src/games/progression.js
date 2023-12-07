import getRandomIntInclusive from '../random.js';
import play from '../structure.js';

const getProgression = () => {
  const progression = [];
  let last = getRandomIntInclusive(1, 10);
  const step = getRandomIntInclusive(1, 5);
  for (let i = 0; i < 10; i += 1) {
    progression[i] = last;
    last += step;
  }

  return progression;
};

const playProgressionGame = () => {
  const quest = 'What number is missing in the progression?';

  const getQuestionAnswer = () => {
    const questions = getProgression();

    const chooseNumber = getRandomIntInclusive(0, 9);
    const chosenAnswer = questions[chooseNumber];
    questions[chooseNumber] = '..';
    const correctAnswers = chosenAnswer;

    const actualQuestions = questions.join(' ');

    return [actualQuestions, correctAnswers];
  };

  return [getQuestionAnswer, quest];
};

export default () => {
  const [getQuestionAnswer, quest] = playProgressionGame();
  play(getQuestionAnswer, quest);
};
