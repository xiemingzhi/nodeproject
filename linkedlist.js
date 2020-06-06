function Node(data){

    //init members
    this.data = data;
 
    this.setData = function(data) {
        this.data = data;
    }

    this.next = function() {
        return next;
    }

    this.setNext = function(next) {
        this.next = next;
    }
 
    this.toString = function(){
        return this.data;
    }
}

function LinkedList(){
 
    //init members
    this.head = null;
    this.count = 0;
 
    this.add = function(data){
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
 
    this.makeRangeIterator = function() {
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

module.exports = LinkedList;
