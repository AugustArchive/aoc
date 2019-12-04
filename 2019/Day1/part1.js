const { readFileSync } = require('fs');

const file  = readFileSync('./input.txt', 'utf8');
const input = file.split('\n');

let amount = 0;
for (const fuel of input) {
    const value = parseInt(fuel);
    amount = amount + (Math.floor(value / 3) - 2);
}

console.log(amount);