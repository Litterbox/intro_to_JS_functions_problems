var readline = require('readline');

var r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question("What is your name", function(name) { 
  console.log(name);
});

/*var r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});*/


r1.question("What is your age", function(age) { 
   console.log(age);
   r1.close();
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUserInput(text) {
   
}
