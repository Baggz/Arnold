// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘chop’
 */
exports.chop = function(test) {

  var output = Arnold.chop('lorem ipsum dolor', 3);

  test.strictEqual( output[0], 'lor' );
  test.strictEqual( output[1], 'em ' );
  test.strictEqual( output[2], 'ips' );
  test.strictEqual( output[3], 'um ' );
  test.strictEqual( output[4], 'dol' );
  test.strictEqual( output[5], 'or' );

  test.done();

};