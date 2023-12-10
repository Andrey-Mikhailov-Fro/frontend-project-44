import readlineSync from 'readline-sync';

const gameplay = (getQuestionAnswer, yourName) => {
  for (let questionOrder = 0; questionOrder < 3; questionOrder += 1) {
    const [questions, correctAnswers] = getQuestionAnswer();

    console.log(`Question: ${questions}`);
    const answer = readlineSync.question('Your answer: ');

    const correct = `${correctAnswers}`;

    if (correct === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is a wrong answer ;(. Correct answer was "${correct}"`);
      // eslint-disable-next-line no-unused-vars
      console.log(`Let's try again, ${yourName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${yourName}!`);
};

export default (getQuestionAnswer, quest) => {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);

  console.log(quest);

  gameplay(getQuestionAnswer, yourName);
};
