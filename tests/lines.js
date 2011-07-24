// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘lines’
 */
exports.lines = function(test) {

  var text = 'Line 1 \n Line 2 \n Line 3 \n Line 4';
  var output = Arnold.lines( text );

  test.deepEqual( output, ["Line 1 ", " Line 2 ", " Line 3 ", " Line 4"] );

  test.done();
  
};