// Loads ‘Arnold’
var Arnold = require('../src/arnold.js');

/**
 * Test ‘countLines’
 */
exports.countLines = function(test) {

  var text = 'Line 1 \n Line 2 \n Line 3 \n Line 4';
  var output = Arnold.countLines( text );

  test.strictEqual( output, 4 );
  
  test.done();
  
};