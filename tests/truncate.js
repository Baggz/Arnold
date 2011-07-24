// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘truncate’
 */
exports.truncate = function(test) {
  
  var output = Arnold.truncate('Lorem ipsum dolor', 3);

  test.strictEqual( output, 'Lor...' );

  var output2 = Arnold.truncate('Lorem ipsum dolor', 3, 'xxx');

  test.strictEqual( output2, 'Lorxxx' );
  
  test.done();
  
};