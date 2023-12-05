import readlineSync from 'readline-sync';
import name from './cli.js';

export const gameplay = (questions, correctAnswers) => {
  let result = false;
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const answer = readlineSync.question('Your answer: ');

    const correct = `${correctAnswers[i]}`;

    if (correct === answer) {
      console.log('Correct!');
      result = true;
    } else {
      console.log(`"${answer}" is a wrong answer ;(. Correct answer was "${correct}"`);
      // eslint-disable-next-line no-unused-vars
      result = false;
      return result;
    }
  }

  return result;
};

export default (questions, correctAnswers, quest) => {
  console.log('Welcome to the Brain Games!');
  const yourName = name();
  console.log(quest);

  const result = gameplay(questions, correctAnswers);

  if (result === true) {
    console.log(`Congratulations, ${yourName}`);
  } else {
    console.log(`Let's try again, ${yourName}`);
  }
};
