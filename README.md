# Martian Robots
The Red Badger developer programming problem

## Install
Run `npm install` to install the requied packages

## Usage
It can be used as a module or by running the cli.

`node bin/robots` or `npm install` the package

To use the cli, the first line must be the size of the grid, then enter all
robots where the position and instructions are on seperate lines. Each robot
must be seperated by an empty line. Enter two empty lines to run the simulation.

Example:
```
>node bin/robots
5 3
1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL


1 1 E
3 3 N LOST
2 3 S
```

## Testing
The sample data and other unit tests for testing can be run with `npm test`
