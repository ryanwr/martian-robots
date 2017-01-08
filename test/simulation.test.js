const assert = require('assert');
const Simulation = require('../').Simulation;
const Robot = require('../').Robot;

describe('Simulation', function() {

  describe('sample_data_1', function() {
    let simulation = new Simulation(5, 3);
    simulation.addRobot(new Robot(1, 1, 'E', 'RFRFRFRF'));
    simulation.addRobot(new Robot(3, 2, 'N', 'FRRFLLFFRRFLL'));
    simulation.addRobot(new Robot(0, 3, 'W', 'LLFFFLFLFL'));

    simulation.run();

    let robots = simulation.getRobots();

    it('first robot should be 1, 1, E', function() {
      assert.equal("1 1 E", robots[0].toString());
    });

    it('second robot should be 3, 3, N LOST', function() {
      assert.equal("3 3 N LOST", robots[1].toString());
    });

    it('last robot should be 2, 3, S', function() {
      assert.equal("2 3 S", robots[2].toString());
    });
  });

});
