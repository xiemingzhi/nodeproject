var utils = require( '@stdlib/utils' );

var linkedList = require( '@stdlib/utils/linked-list' );

var list = linkedList();
// returns <LinkedList>

// Add values to the list:
list.push( 'foo' ).push( 'bar' ).push( 'beep' );

// Determine the list length:
var len = list.length;
console.log(len);// returns 3

// Get the second node:
var node = list.first().next;

// Insert a value after the second node:
list.insert( node, 'boop' );

// Determine the list length:
len = list.length;
console.log(len);// returns 4

// Iterate over the list:
iter = list.iterator();
for ( i = 0; i < len; i++ ) {
    console.log( 'List value #%d: %s', i+1, iter.next().value );
}