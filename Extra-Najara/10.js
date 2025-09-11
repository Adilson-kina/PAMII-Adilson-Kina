async function getInfo(){
  let x = await fetch('https://jsonplaceholder.typicode.com/todos/10');
  let y = await x.json();
  await console.log(y);
}

getInfo();
