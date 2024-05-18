// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    _fill(s1, s2) {

    }

    add(value) {
        while (this.stack2.peek()) {
            this.stack1.push(this.stack2.pop());
        }
        this.stack1.push(value);
        return this;
    }

    remove() {
        while (this.stack1.peek()) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.pop();
    }

    peek() {
        while (this.stack2.peek()) {
            this.stack1.push(this.stack2.pop());
        }
        return this.stack1.peek();
    }
}

const q = new Queue();
q.add(1);
q.add(2);
console.log(q.peek());  // returns 1
console.log(q.remove()); // returns 1
q.add(3);
console.log(q.peek()); 
console.log(q.remove()); // returns 2

module.exports = Queue;
