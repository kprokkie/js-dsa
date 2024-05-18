// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.queue = [];
    }

    add(value) {
        this.queue.push(value);
        return this;
    }

    remove() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[this.queue.length - 1];
    }

}

const q = new Queue();
console.log(q.add(1));
console.log(q.peek());
console.log(q.remove()); // returns 1;

module.exports = Queue;
