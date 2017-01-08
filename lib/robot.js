'use strict';

const utils = require('./utils');

module.exports = class Robot {

  // Given the upper right coordinate, creates a map
  constructor(x, y, facing, instructions) {
    this.x = x;
    this.y = y;
    this.degree = utils.directionToDegrees(facing);
    this.instructions = instructions.trim();
    this.lost = false;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getDirection() {
    return utils.degreesToDirection(this.degree);
  }

  isLost() {
    return this.lost;
  }

  toString() {
    let val = `${this.x} ${this.y} ${this.getDirection()}`;
    if(this.lost) return val + " LOST";
    else return val;
  }

  // Processes an instruction
  processInstruction(instruction, map) {
      switch(instruction) {
        case 'F':
          let vector = utils.degreesToVector(this.degree);

          let newX = this.x + vector[0];
          let newY = this.y + vector[1];

          if(!map.isValid(newX, newY)) {
            // if the current grid is scented, we ignore the instruction
            if(map.isScented(this.x, this.y)) {
               return;
            } else {
              this.lost = true;
              map.setScented(this.x, this.y);
            }
          } else {
            // Move to the new position if it's valid
            this.x = newX;
            this.y = newY;
          }
          break;
        case 'L':
          this.degree -= 90;
          if(this.degree < 0) this.degree = 270;
          break;
        case 'R':
          this.degree += 90;
          if(this.degree > 270) this.degree = 0;
          break;
      }
  }

  run(map) {
    for(let i = 0; i < this.instructions.length; i++) {
      this.processInstruction(this.instructions[i], map);
      if(this.lost) return; // if we become lost, we ignore the rest of the instructions
    }
  }

}
