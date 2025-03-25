const readline = require('node:readline');

const input = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

input.question(`Digite um uma palavra:`, word => {
  let wordArray = word.split("");
  let aCount = 0;
  for(let i = 0; i < wordArray.length; i++){
    wordArray[i] == "a" || wordArray[i] == "A" || wordArray[i] == "á" || wordArray[i] == "Á" ? aCount++ : null;
  }
  console.log(`A palavra tem ${aCount} letras 'A'`);
input.close();
});
