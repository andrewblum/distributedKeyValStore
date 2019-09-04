const welcomeMessage = ' WELCOME TO KVSDB  \n Please enter a command: '

const protobuf = require('protobufjs');
const fs = require('fs');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

console.log(welcomeMessage)

rl.on('line', (line) => {
    const input = line.split(' ');
    if (input[0] === 'get') {
      console.log('getting')
    }
    if (input[0] === 'set') {
      console.log('setting')
      console.log(input[1])
    }
})

rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit? ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});


fs.readFile('data.pbf', (err, data) => {
  console.log(data);
})





