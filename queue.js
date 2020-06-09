/*
FIFO
*/
function Queue() {
    this.container = [];
    this.add = function(data) {
        this.container.push(data);
    }
    this.remove = function() {
        return this.container.shift();
    }
    this.isEmpty = function() {
        return this.container.length > 0 ? true : false;
    }
}

module.exports = Queue;