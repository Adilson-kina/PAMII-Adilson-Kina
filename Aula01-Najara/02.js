const readline = require('node:readline');

const input = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

input.question(`Digite um numero:`, num => {
	num > 0 ? console.log("maior que zero") : num < 0 ? console.log("menor que zero") : console.log("zero");
	input.close();
});
