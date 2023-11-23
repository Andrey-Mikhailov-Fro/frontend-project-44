#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const yourName = name();

const getRandomIntInclusive = (min, max) => {
  const minimal = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimal + 1) + minimal);
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let result = false;

for (let i = 3; i > 0; i -= 1) {
  const num = getRandomIntInclusive(1, 100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  const correct = (num % 2) > 0 ? 'no' : 'yes';

  if (correct === answer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`"${answer}" is a wrong answer ;(. Correct answer was "${correct}"`);
    result = false;
    break;
  }
}

if (result === true) {
  console.log(`Congratulations, ${yourName}`);
} else {
  console.log(`Let's try again, ${yourName}`);
}
