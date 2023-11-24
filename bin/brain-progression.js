#!/usr/bin/env node

import name from '../src/cli.js';
import getRandomIntInclusive from '../src/random.js';
import play from '../src/structure.js';
import finish from '../src/finish.js';

console.log('Welcome to the Brain Games!');
const yourName = name();

console.log('What number is missing in the progression?');

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

const result = play(questions, correctAnswers);

finish(result, yourName);
