// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘countCharacters’
 */
exports.countCharacters = function(test) {
  
  var output = Arnold.countCharacters('Hello');
  
  test.strictEqual( output, 5 );
  
  test.done();
  
};