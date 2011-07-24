// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘countWords’
 */
exports.countWords = function(test) {

  var output = Arnold.countWords( 'Hello? Hello! Hi. Holla;' );

  test.strictEqual( output, 4 );

  test.done();
  
};