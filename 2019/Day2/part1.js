const { readFileSync } = require('fs');

const file   = readFileSync('./input.txt', 'utf8');
const inputs = file.split(',');

/**
 * Gets the OPCode, splices from the `inputs` array and returns the opcode and the 3 arguments it requires
 * 
 * **NOTE**: OPCode 99 doesn't require any arguments, so it just returns an empty array
 * 
 * @returns {{ opcode: string; arguments: [string, string, string]; }} The OPCode (`1`) and the 3 arguments it requires
 */
function getOpcode() {
    const [opcode, arg1, arg2, arg3] = inputs;

    if (opcode === '99') return { opcode: '99', arguments: [] };
    inputs.splice(0, 4);
    return {
        opcode,
        arguments: [arg1, arg2, arg3]
    };
}

// debugging this for now
const { opcode, arguments: args } = getOpcode();
console.log(`OPCode: ${opcode}\nArguments: ${args.join(' | ')}`)