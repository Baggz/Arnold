// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘reverse’
 */
exports.reverse = function(test) {

  var output = Arnold.reverse('Hello!');

  test.strictEqual( output, '!olleH' );

  test.done();

};