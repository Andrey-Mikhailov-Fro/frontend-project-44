#!/usr/bin/env node

import name from '../src/cli.js';
import getRandomIntInclusive from '../src/random.js';
import play from '../src/structure.js';
import finish from '../src/finish.js';

console.log('Welcome to the Brain Games!');
const yourName = name();

console.log('What is the result of the expression?');

const questions = [];
const correctAnswers = [];

for (let i = 0; i < 3; i += 1) {
  const a = getRandomIntInclusive(1, 100);
  const b = getRandomIntInclusive(1, 100);
  const expressionSym = getRandomIntInclusive(1, 3);

  if (expressionSym === 1) {
    questions[i] = `${a} + ${b}`;
    correctAnswers[i] = `${a + b}`;
  } else if (expressionSym === 2) {
    questions[i] = `${a} - ${b}`;
    correctAnswers[i] = `${a - b}`;
  } else if (expressionSym === 3) {
    questions[i] = `${a} * ${b}`;
    correctAnswers[i] = `${a * b}`;
  }
}

const result = play(questions, correctAnswers);

finish(result, yourName);
