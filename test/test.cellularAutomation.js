const assert = require('assert');

const CellularAutomaton = require('../src/cellularAutomaton.js').CellularAutomaton;
const Row = require('../src/cellularAutomaton.js').Row;

describe('cellular automation', function() {
    describe('#patterns()', function() {
        it('should return the following definition 0, 1, 1, 0, 1, 1, 1, 0 for rule 110', function() {
            const automaton = new CellularAutomaton(null, 20, 110);
            assert.deepEqual(automaton.patterns, {
                '100': 0,
                '101': 1,
                '110': 1,
                '111': 0,
                '000': 0,
                '001': 1,
                '010': 1,
                '011': 1
            });
        });

        it('should return the following definition 1, 0, 0, 0, 1, 0, 0, 1 with rule 137', function() {
            const automaton = new CellularAutomaton(null, 20, 137);
            assert.deepEqual(automaton.patterns, {
                '100': 0,
                '101': 0,
                '110': 0,
                '111': 1,
                '000': 1,
                '001': 0,
                '010': 0,
                '011': 1
            });
        });
    });
});