const readline = require('node:readline');

const input = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

input.question(`Digite um numero:`, num => {
  let sum = 0;
  for(let i = 0; i <= num; i++){
    sum += i;
  }
  console.log(`A soma dos números inteiros de 1 até ${num} é ${sum} \n`)
	input.close();
});
