
// LL
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class MyQueue {
    constructor () {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // stack
            // newNode.next = this.top;
            // this.top = newNode;

            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.length
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        if (this.first === this.last) {
            this.last = null;
        }

        const value = this.first.value; 
        this.first = this.first.next;
        this.length--;

        return value;
    }

    isEmpty() {
        return !this.length;
    }
}

const myQueue = new MyQueue();
console.log(myQueue.enqueue('A'));
console.log(myQueue.enqueue('B'));
console.log(myQueue.enqueue('C'));
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue);