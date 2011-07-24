// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘count’
 */
exports.count = function(test) {

  var output = Arnold.count('lorem ipsum lorem ipsum dolor ipsum dolor', 'lor');

  test.strictEqual( output, 4 );

  test.done();

};