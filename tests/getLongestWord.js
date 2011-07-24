// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘getLongestWord’
 */
exports.getLongestWord = function(test) {
  
  var output = Arnold.getLongestWord( ['pum', 'lorem', 'ip', 'sum'] );
  
  test.strictEqual( output, 'lorem' );
  
  test.done();
  
};