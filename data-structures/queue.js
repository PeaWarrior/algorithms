// A queue is a data structure primarily used to add data in and to remove data out.
// The order that the data is added and removed is FIFO(first in, first out).
// Can be implemented using an array or making your own. The latter reduces bloat as arrays come with extra functions we won't need.

// Example: Waiting on line. Print jobs on a printer.

// Building a queue with an array: 2 options
let queue = []
// First option: Add to the end and remove from the beginning
queue.push('first')
queue.shift()
// Second option: Add to the beginning and remove from the end
queue.unshift('first')
queue.pop()
// Not very effective for performance as unshifting or shifting re-indexes our array.

// Building a queue from scratch: 
class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(value) {
        const node = new Node(value)
        if (!this.first) {
            this.first = node
        } else {
            this.last.next = node
        }
        this.last = node
        return ++this.size
    }

    dequeue() {
        if (!this.first) return null
        let node = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = node.next
        this.size--
        return node.value
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}