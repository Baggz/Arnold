// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘capitalize’
 */
exports.capitalize = function(test) {

  var output = Arnold.capitalize('lorem ipsum');

  test.strictEqual( output[0], 'L' );
  test.strictEqual( output.slice(1), 'orem ipsum' );

  test.done();

};