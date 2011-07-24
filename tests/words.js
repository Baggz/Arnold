// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘words’
 */
exports.words = function(test) {

  var output = Arnold.words( 'Hello world!' );

  test.deepEqual( output, ["Hello", "world!"] );

  test.done();
  
};