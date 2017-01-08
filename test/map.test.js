const assert = require('assert');
const Map = require('../lib/map');

describe('Map', function() {

  describe('Map()', function() {
    let map = new Map(5, 3);
    it('should create a new map of width 6, and height 4', function() {
      assert.equal(6, map.getWidth());
      assert.equal(4, map.getHeight());
    });
  });

  describe('#isValid()', function() {
    let map = new Map(5, 3);
    it('should be valid at (1, 1)', function() {
      assert.equal(true, map.isValid(1, 1));
    });

    it('should not be valid at (6, 3)', function() {
      assert.equal(false, map.isValid(6, 3));
    });
  });

  describe('#isScented()', function() {
    let map = new Map(5, 3);
    map.setScented(1, 1);
    it('should be scented at (1, 1)', function() {
      assert.equal(true, map.isScented(1, 1));
    });

    it('should not be scented at (1, 2)', function() {
      assert.equal(false, map.isScented(1, 2));
    });
  });

});
