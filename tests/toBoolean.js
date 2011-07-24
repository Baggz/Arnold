// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘toBoolean’
 */
exports.toBoolean = function(test) {

  var output = Arnold.toBoolean( 1 );

  test.strictEqual( output, true );

  var output2 = Arnold.toBoolean( 0 );

  test.strictEqual( output2, false );
  
  test.done();
  
};