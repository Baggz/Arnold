// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘escape’
 */
exports.escape = function(test) {
  
  test.strictEqual( Arnold.escape('<strong>Hello!</strong>'), '&ltstrong&gtHello!&lt/strong&gt' );
  
  test.done();
  
};