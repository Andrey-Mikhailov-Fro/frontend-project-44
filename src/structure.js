import readlineSync from 'readline-sync';

const gameplay = (getQuestionAnswer) => {
  let result = false;
  for (let i = 0; i < 3; i += 1) {
    const [questions, correctAnswers] = getQuestionAnswer();

    console.log(`Question: ${questions}`);
    const answer = readlineSync.question('Your answer: ');

    const correct = `${correctAnswers}`;

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

export default (getQuestionAnswer, quest) => {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);

  console.log(quest);

  const result = gameplay(getQuestionAnswer);

  if (result === true) {
    console.log(`Congratulations, ${yourName}!`);
  } else {
    console.log(`Let's try again, ${yourName}!`);
  }
};
