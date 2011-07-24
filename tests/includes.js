// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘includes’
 */
exports.includes = function(test) {

  var output = Arnold.includes( 'lorem ipsum', 'lor' );
  
  test.strictEqual( output, true );

  var output2 = Arnold.includes( 'lorem ipsum', 'hello' );
  
  test.strictEqual( output2, false );

  test.done();
  
};