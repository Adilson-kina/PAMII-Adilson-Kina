const readline = require('node:readline');

const input = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

input.question(`Digite um numero:`, num => {
	num % 2 == 0 ? console.log("par") : console.log("impar");
	input.close();
});
