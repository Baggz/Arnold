// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘stripTags’
 */
exports.stripTags = function(test) {

  var output = Arnold.stripTags( '<strong>Hello!</strong>' );

  test.strictEqual( output, 'Hello!' );
  
  test.done();
  
};