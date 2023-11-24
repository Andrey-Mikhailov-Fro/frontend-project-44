#!/usr/bin/env node

import _ from 'lodash';
import name from '../src/cli.js';
import getRandomIntInclusive from '../src/random.js';
import play from '../src/structure.js';
import finish from '../src/finish.js';

console.log('Welcome to the Brain Games!');
const yourName = name();

console.log('Find the greatest common divisor of given numbers.');

const questions = [];
const correctAnswers = [];

const gcd = (num1, num2) => {
  const numDivisors1 = [];
  const numDivisors2 = [];

  for (let i = 1; i <= num1; i += 1) {
    if ((num1 % i) === 0) {
      numDivisors1.push(i);
    }
  }

  for (let i = 1; i <= num2; i += 1) {
    if ((num2 % i) === 0) {
      numDivisors2.push(i);
    }
  }

  const commonDivisors = _.intersection(numDivisors1, numDivisors2);
  const maxCommonDivisor = _.max(commonDivisors);
  return maxCommonDivisor;
};

for (let i = 0; i < 3; i += 1) {
  const a = getRandomIntInclusive(1, 100);
  const b = getRandomIntInclusive(1, 100);

  questions[i] = `${a} ${b}`;
  correctAnswers[i] = gcd(a, b);
}

const result = play(questions, correctAnswers);

finish(result, yourName);
