const welcomeMessage = ' WELCOME TO KVSDB  \n Please enter a command: '

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

console.log(welcomeMessage)

rl.on('line', (line) => {
    console.log(line);
})

rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit? ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});

