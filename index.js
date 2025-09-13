const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number: ", (first) => {
  rl.question("Enter second number: ", (second) => {
    const sum = parseFloat(first) + parseFloat(second);
    console.log("Sum is " + sum);
    rl.close();
  });
});
