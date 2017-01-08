'use strict';

function degreesToDirection(degrees) {
  switch(degrees % 360) {
    case 0: return 'N';
    case 90: return 'E';
    case 180: return 'S';
    case 270: return 'W';
  }
}

function directionToDegrees(direction) {
  switch(direction.trim().toUppercase()) {
    case 'N': return 0;
    case 'E': return 90;
    case 'S': return 180;
    case 'W': return 270;
  }
}

function degreesToVector(degrees) {
  switch(degrees % 360) {
    case 0: return [0, 1];
    case 90: return [1, 0];
    case 180: return [0 -1];
    case 270: return [-1, 0];
  }
}

module.exports = {
  degreesToDirection: degreesToDirection,
  directionToDegrees: directionToDegrees,
  degreesToVector: degreesToVector,
}
