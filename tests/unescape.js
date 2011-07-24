// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘unescape’
 */
exports.unescape = function(test) {

  test.strictEqual( Arnold.unescape('&ltstrong&gtHello!&lt/strong&gt'), '<strong>Hello!</strong>');

  test.done();
  
};