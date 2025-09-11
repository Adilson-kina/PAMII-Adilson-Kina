const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question(`Digite sua idade:`, x => {
  idade = Number(x);
  if (idade>=18) {
    console.log('maior');
  }
  else{
    console.log('menor');
  }
  rl.close();
});

