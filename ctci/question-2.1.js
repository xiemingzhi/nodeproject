/*
2.1 Remove Dups: Write code to remove duplicates from an unsorted linked list.
*/
//using commonjs 
const LinkedList = require('../linkedlist.js');

function checkDuplicate(head, thevalue) {
    let curr = head;
    while (curr.next != null) {
        if (curr.data == thevalue) {
            return true;
        }
        curr = curr.next;
    }
    return false;
}

function removeDuplicates(thelinkedlist) {
    let head = thelinkedlist.head;
    let curr = head;
    while (curr.next != null) {
        if (checkDuplicate(curr.next, curr.data)) {
            curr.next = curr.next.next;
            thelinkedlist.count--;
        } else {
            curr = curr.next
        }
    }
}

let linkedList = new LinkedList();
linkedList.add("1");
linkedList.add("2");
linkedList.add("3");
linkedList.add("4");
len = linkedList.count;
console.log('linkedlist count', linkedList.count);
iter = linkedList.makeRangeIterator();
for ( i = 0; i < len; i++ ) {
    console.log( 'List value #%d: %s', i+1, iter.next().value );
}
console.log('checkduplicate(4)', checkDuplicate(linkedList.head, "4"));
console.log('checkduplicate(5)', checkDuplicate(linkedList.head, "5"));
linkedList = new LinkedList();
linkedList.add("a");
linkedList.add("b");
linkedList.add("c");
linkedList.add("d");
linkedList.add("e");
linkedList.add("f");
linkedList.add("g");
linkedList.add("g");
linkedList.add("g");
linkedList.add("g");
console.log('linkedlist before removedup count', linkedList.count);
removeDuplicates(linkedList);
len = linkedList.count;
iter = linkedList.makeRangeIterator();
for ( i = 0; i < len; i++ ) {
    console.log( 'List value #%d: %s', i+1, iter.next().value );
}
console.log('linkedlist count', linkedList.count);