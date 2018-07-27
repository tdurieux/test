const assert = require('assert');
const CellularAutomaton = require('../src/cellularAutomaton.js').CellularAutomaton;
describe('cellular automation', function() {
    describe('#ruleDefinition()', function() {
        it('should return [0, 1, 1, 0, 1, 1, 1, 0] with rule 110', function() {
            const automaton = new CellularAutomaton(null, 20, 110);
            assert.deepEqual([0, 1, 1, 0, 1, 1, 1, 0], automaton.ruleDefinition);
        });

        it('should return [1, 0, 0, 0, 1, 0, 0, 1] with rule 137', function() {
            const automaton = new CellularAutomaton(null, 20, 137);
            assert.deepEqual([1, 0, 0, 0, 1, 0, 0, 1], automaton.ruleDefinition);
        });
    });
});

