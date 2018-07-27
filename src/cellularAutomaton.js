/**
 * Expose the library.
 */
exports = module.exports;

class CellularAutomaton {
    constructor(size, nbIterations, rule) {
        this.size = size || 64;
        this.nbIterations = nbIterations || 20;
        this.rule = rule;
        // The state of the first iteration
        this.initstate = Array(this.size).fill(0);
        this.initstate[this.size - 1] = 1;
    }

    get patterns() {
        const patterns = ['111', '110', '101', '100', '011', '010', '001', '000'];
        const definition = (this.rule >>> 0).toString(2).split('').map(x => parseInt(x));
        const paddingSize = 8 - definition.length;

        const output = {};

        for (let i = patterns.length - 1; i >= 0; i --) {
            if (i - paddingSize >= 0) {
                output[patterns[i]] = definition[i - paddingSize];
            } else {
                output[patterns[i]] = 0;
            }
        }

        return output;
    }
}

exports.CellularAutomaton = CellularAutomaton;
