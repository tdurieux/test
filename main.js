const program = require('commander');
const CellularAutomaton = require('./src/cellularAutomaton').CellularAutomaton;

program
    .version('0.1.0')
    .option('-s, --size <size>', 'change the size of the automaton', 64)
    .option('-i, --iteration <iteration>', 'the number of iteration of the automaton', 20)
    .option('--state <state>', 'initial state (e.g. 001)');

program
  .command('rule [rule]')
  .description('run the specific rule')
  .action(function(rule, options){
      const nbIteration = parseInt(options.parent.iteration);
      const size = parseInt(options.parent.size);
      const automaton = new CellularAutomaton(size, nbIteration, rule);
      console.log(automaton.computeIteration());
  });

program.parse(process.argv);
