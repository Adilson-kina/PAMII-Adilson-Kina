const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question(`Digite um número:`, x => {
  rl.question(`Digite outro:`, y =>{
    let num1 = Number(x);
    let num2 = Number(y);
    sum = num1 + num2;
    sub = num1 - num2;
    mul = num1 * num2;
    div = num1 / num2;
    console.log(`Soma:${sum} \nSubtração:${sub} \nMultiplicação:${mul} \nDivisão:${div}`);
    rl.close();
  })
});

