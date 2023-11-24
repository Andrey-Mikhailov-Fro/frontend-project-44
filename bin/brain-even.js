#!/usr/bin/env node

import name from '../src/cli.js';
import getRandomIntInclusive from '../src/random.js';
import play from '../src/structure.js';
import finish from '../src/finish.js';

console.log('Welcome to the Brain Games!');
const yourName = name();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const questions = [];
const correctAnswers = [];

for (let i = 0; i < 3; i += 1) {
  questions[i] = getRandomIntInclusive(1, 100);
  correctAnswers[i] = (questions[i] % 2) > 0 ? 'no' : 'yes';
}

const result = play(questions, correctAnswers);

finish(result, yourName);
