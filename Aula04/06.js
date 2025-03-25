const readline = require('node:readline');

const input = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

input.question(`Digite um uma palavra:`, word => {
  let wordArray = word.split("");
  let i2 = 0;
  let invertedWord = [];
  for(let i = wordArray.length - 1; i >= 0; i--){
    invertedWord[i2] = wordArray[i];
    i2++;
  }
  console.log(invertedWord.join(""));
input.close();
});
