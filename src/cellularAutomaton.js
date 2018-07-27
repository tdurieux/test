/**
 * Expose the library.
 */
exports = module.exports;

class Row {
    constructor(state) {
        this.size = state.length;
        this.rowState = state.slice();
    }

    get state() {
        return this.rowState;
    }

    /**
     * get the neighbours of a cell
     *
     * @param index the index of the cell
     * @returns {string} a string of 3 characters: left neighbour, current cell, right neighbour
     */
    getNeighbours(index) {
        let leftValue = index === 0 ? this.state[this.size - 1]: this.state[index - 1];
        const centerValue = this.state[index];
        let rightValue = index === this.size - 1? this.state[0]: this.state[index + 1];

        return ''+leftValue+centerValue+rightValue;
    }

    toString() {
        let output = '';
        for (const value of this.state) {
            if (value === 1) {
                output += "X";
            } else {
                output += ".";
            }
        }
        return output;
    }
}

class CellularAutomaton {
    constructor(size, nbIterations, rule) {
        this.size = size || 64;
        this.nbIterations = nbIterations || 20;
        this.rule = rule;
        // The state of the first iteration
        this.currentState = new Row(Array(this.size).fill(0));
        this.currentState.state[this.size - 1] = 1;
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

    /**
     * compute the next row state based on the rule number
     *
     * @returns {Row}
     */
    computeNextState() {
        const nextState = new Row(Array(this.size).fill(0));
        for (let i = 0; i < this.size; i++) {
            const neighbours = this.currentState.getNeighbours(i);
            const newValue = this.patterns[neighbours];

            nextState.state[i] = newValue;
        }
        return nextState;
    }
}

exports.CellularAutomaton = CellularAutomaton;
exports.Row = Row;

