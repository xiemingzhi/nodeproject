class Node{

    constructor(data){
        //init members
        this.data = data;
    }
 
    data() {
        return data;
    }

    setData(data) {
        this.data = data;
    }

    next() {
        return next;
    }

    setNext(next) {
        this.next = next;
    }
 
    toString(){
        return this.data;
    }
}

class LinkedList{
 
    constructor(){
        //init members
        this.head = null;
        this.count = 0;
    }
 
    head(){
        return head;
    }
 
    add(data){
        if (this.head === null) {
            this.head = new Node(data);
            this.head.next = null;
            this.count++;
        } else {
            let oldnode = this.head;
            this.head = new Node(data);
            this.head.next = oldnode;
            this.count++;
        }
    }
 
    makeRangeIterator() {
        let nextIndex = this.head;
        let totalCount = this.count;
        let iterationCount = 0;
    
        const rangeIterator = {
           next: function() {
               let result;
               if (iterationCount < totalCount) {
                   result = { value: nextIndex, done: false }
                   nextIndex = nextIndex.next;
                   iterationCount++;
                   return result;
               }
               return { value: nextIndex, done: true }
           }
        };
        return rangeIterator;
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