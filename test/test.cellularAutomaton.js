const assert = require('assert');

const CellularAutomaton = require('../src/cellularAutomaton.js').CellularAutomaton;
const Row = require('../src/cellularAutomaton.js').Row;

describe('cellular automaton', function() {
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

    describe('#computeNextState()', function() {
        it('should compute the following state of the automaton ', function() {
            const automaton = new CellularAutomaton(3, 20, 110);
            assert.deepEqual(automaton.currentState.state, [0, 0, 1]);
            const nextState = automaton.computeNextState();
            assert.deepEqual(nextState.state, [0, 1, 1]);
            assert.deepEqual(automaton.currentState.state, [0, 1, 1]);
        });
    });

    describe('#computeIteration()', function() {
        it('should return the correct automaton for rule 110', function() {
            const automaton = new CellularAutomaton(3, 3, 110);
            assert.equal(automaton.toString(), "..X\n.XX\nXXX\n");
        });

        it('should return the correct automaton for rule 50', function() {
            const automaton = new CellularAutomaton(3, 3, 50);
            assert.equal(automaton.toString(), "..X\nXX.\n..X\n");
        });
    });
});

describe('row of cellular automaton', function() {
    describe('#getNeighbours()', function() {
        it('should wrap on the left', function() {
            const row = new Row([1, 0, 1, 9]);
            assert.equal(row.getNeighbours(0), '910');
        });

        it('should wrap on the right', function() {
            const row = new Row([9, 0, 1, 0]);
            assert.equal(row.getNeighbours(3), '109');
        });

        it('should return the neighbours', function() {
            const row = new Row([9, 0, 1, 0]);
            assert.equal(row.getNeighbours(1), '901');
        });
    });
});
