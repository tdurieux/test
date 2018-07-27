# Elementary cellular automaton [![Build Status](https://travis-ci.com/tdurieux/test.svg?branch=master)](https://travis-ci.com/tdurieux/test) [![Coverage Status](https://coveralls.io/repos/github/tdurieux/test/badge.svg?branch=master)](https://coveralls.io/github/tdurieux/test?branch=master) 

The project compute the elementary cellular automaton for the 256 rules

## Example

```bash
node main.js rule 110
```

## Usage 

```bash
Usage: node main.js [options] rule <rule_number>

  Options:

    -V, --version                output the version number
    -s, --size <size>            change the size of the automaton (default: 64)
    -i, --iteration <iteration>  the number of iteration of the automaton (default: 20)
    --state <state>              initial state (e.g. 001)
    -h, --help                   output usage information

  Commands:

    rule [rule]                  run the specific rule
```