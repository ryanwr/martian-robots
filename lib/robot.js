'use strict';

module.exports = class Robot {

  // Given the upper right coordinate, creates a map
  constructor(x, y, facing, instructions) {
    this.x = x;
    this.y = y;
    this.degree = facing;
    this.instructions = instructions;
  }

}
