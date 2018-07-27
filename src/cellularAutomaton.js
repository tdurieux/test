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

    get ruleDefinition() {
        const strDefinition = (this.rule >>> 0).toString(2).split('').map(x => parseInt(x));
        const paddingSize = 8 - strDefinition.length;
        return new Array(paddingSize).fill(0).concat(strDefinition);
    }
}

exports.CellularAutomaton = CellularAutomaton;

