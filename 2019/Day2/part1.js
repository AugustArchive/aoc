const { readFileSync } = require('fs');

const file   = readFileSync('./input.txt', 'utf8');
const inputs = file.split(',');

/**
 * Gets the OPCode, splices from the `inputs` array and returns the opcode and the 3 arguments it requires
 * 
 * **NOTE**: OPCode 99 doesn't require any arguments, so it just returns an empty array
 * 
 * @returns {{ op: number; args: [number, number, number]; }} The OPCode (`1`) and the 3 arguments it requires
 */
function getOpcode() {
    const [opcode, arg1, arg2, arg3] = inputs;

    // if the op is 99, returns an object that is opcode 99 with 0-length arguments
    if (opcode === '99') {
        inputs.splice(0, 1);
        return { op: '99', args: [] };
    }

    // splice the array (so we won't get the same opcode/arguments)
    inputs.splice(0, 4);

    // return the opcode and arguments (should be a length of 3!)
    return {
        op: parseInt(opcode),
        args: [parseInt(arg1), parseInt(arg2), parseInt(arg3)]
    };
}

let value = 0;

/**
 * Calculates the OPCode designated from the problem
 * @param {number} opcode The OPCode to calculate from
 * @param {[number, number, number]} args The numbers to calculate
 */
function calculateOpcode(opcode, args) {
    if (opcode === 1) {
        const [one, two, three] = args;
        value = value + one + two + three;
        calculateOpcode(opcode, args);
    }

    if (opcode === 2) {
        const [one, two, three] = args;
        value = value * one * two * three;
        calculateOpcode(opcode, args);
    }
}

const { op, args } = getOpcode();
if (op === 99) {
    console.log(value);
    process.exit();
}

calculateOpcode(op, args);