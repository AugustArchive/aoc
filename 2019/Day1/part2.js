const { readFileSync } = require('fs');

const input = readFileSync('./input.txt', 'utf8');
const inputs = input.split('\n');

/**
 * Calculates the fuel and recursives if `fuel` is over 0
 * @param {number} value The value to formulate the check from
 * @returns {number} It returns `0` if the fuel went below 0 or returns a value if it went over `0`
 */
function calculateFuel(value) {
    const fuel = (Math.floor(value / 3) - 2);
    if (fuel > 0) {
        return fuel + calculateFuel(fuel);
    } else {
        return 0;
    }
}

let amount = 0;
for (let value of inputs) {
    let fuel = calculateFuel(parseFloat(value));
    amount = amount + fuel;
}

console.log(amount);