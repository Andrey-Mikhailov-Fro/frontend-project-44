import readlineSync from 'readline-sync';

export default (questions, correctAnswers) => {
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
