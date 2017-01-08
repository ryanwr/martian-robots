'use strict';

import * from './map';

export default class Simulation {

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
