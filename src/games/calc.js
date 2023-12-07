import getRandomIntInclusive from '../random.js';
import play from '../structure.js';

const playCalcGame = () => {
  const quest = 'What is the result of the expression?';

  const getQuestionAnswer = () => {
    let questions = '';
    let correctAnswers = 0;

    const a = getRandomIntInclusive(1, 100);
    const b = getRandomIntInclusive(1, 100);
    const expressionSym = getRandomIntInclusive(1, 3);

    if (expressionSym === 1) {
      questions = `${a} + ${b}`;
      correctAnswers = `${a + b}`;
    } else if (expressionSym === 2) {
      questions = `${a} - ${b}`;
      correctAnswers = `${a - b}`;
    } else if (expressionSym === 3) {
      questions = `${a} * ${b}`;
      correctAnswers = `${a * b}`;
    }

    return [questions, correctAnswers];
  };

  return [getQuestionAnswer, quest];
};

export default () => {
  const [getQuestionAnswer, quest] = playCalcGame();
  play(getQuestionAnswer, quest);
};
