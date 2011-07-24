// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘titleize’
 */
exports.titleize = function(test) {

  var output = Arnold.titleize('lorem ipsum');

  test.strictEqual( output, 'Lorem Ipsum' );

  test.done();
  
};