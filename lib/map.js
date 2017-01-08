'use strict';

export default class Map {

  // Given the upper right coordinate, creates a map
  constructor(upX, upY) {
    this.width = upX + 1;
    this.height = upY + 1;

    this.map = new Array(this.height);
    for(let i = 0; i < this.height; i++) {
      this.map[i] = new Array(this.width);
    }
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  isValid(x, y) {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  getCoordinate(x, y) {
    if(isValid(x, y)) return this.map[y][x];
  }

}
