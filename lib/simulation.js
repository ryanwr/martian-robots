'use strict';

const Map = require('./map');

module.exports = class Simulation {

  // Create simulation
  constructor(upX, upY) {
    this.map = new Map(upX, upY);
    this.robots = [];
  }

  // Add robot
  addRobot(robot) {
    this.robots.push(robot);
  }

  getRobots() {
    return this.robots;
  }

  // Run simulation
  run() {
    this.robots.forEach((robot) => {
      robot.run(this.map);
    });
  }

}
