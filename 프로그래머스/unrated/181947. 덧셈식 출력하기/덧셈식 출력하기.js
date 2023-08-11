const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    rl.close()
}).on('close', function () {
    let [num1, num2] = input;
    let sum = parseInt(num1) + parseInt(num2);
    console.log(num1 + ' + ' + num2 +' = '+sum);
    process.exit()
});