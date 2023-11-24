#!/usr/bin/env node

import name from '../src/cli.js';
import play from '../src/structure.js';
import finish from '../src/finish.js';
import game from '../games/progression.js';

console.log('Welcome to the Brain Games!');
const yourName = name();

const [questions, correctAnswers] = game();

const result = play(questions, correctAnswers);

finish(result, yourName);
