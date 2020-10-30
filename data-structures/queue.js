// A queue is a data structure primarily used to add data in and to remove data out.
// The order that the data is added and removed is FIFO(first in, first out).
// Can be implemented using an array or making your own. The latter reduces bloat as arrays come with extra functions we won't need.
 
// Example: Waiting on line. Print jobs on a printer.

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}