// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘toNumbers’
 */
exports.toNuber = function(test) {
  
  var output = Arnold.toNumber('1');
  
  test.strictEqual( typeof output, 'number' );
  
  test.done();
  
};