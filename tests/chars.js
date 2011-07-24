// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘chars’
 */
exports.chars = function(test) {

  var output = Arnold.chars('Hello!');

  test.strictEqual( output[0], 'H' );
  test.strictEqual( output[1], 'e' );
  test.strictEqual( output[2], 'l' );
  test.strictEqual( output[3], 'l' );
  test.strictEqual( output[4], 'o' );
  test.strictEqual( output[5], '!' );
  
  test.done();
  
};