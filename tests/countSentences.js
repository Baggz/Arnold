// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘countSentences’
 */
exports.countSentences = function(test) {
  
  var output = Arnold.countSentences( 'Hello? Hello! Hi. Holla;' );
  
  test.strictEqual( output, 4 );
  
  test.done();
  
};