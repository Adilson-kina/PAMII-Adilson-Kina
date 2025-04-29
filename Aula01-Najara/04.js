const readline = require('node:readline');

const input = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

input.question(`Digite um numero:`, num => {
  let isPrime = 0;
  for(let i = num; i > 0; i--){
    num % i == 0 ? isPrime++ : null;
  }
  isPrime <= 2 ? console.log("Primo") : console.log("Não primo");
input.close();
});
