// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘getShortestWord’
 */
exports.getShortestWord = function(test) {
  
  var output = Arnold.getShortestWord( ['lorem', 'ip', 'sum'] );
  
  test.strictEqual( output, 'ip' );  

  test.done();
  
};