
// LL
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class MyStack {
    constructor () {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);

        if(!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            // let topNode = this.top;
            // this.top = newNode;
            // topNode.next = newNode;

            // const topPointer = this.top; // hold old pointer
            // this.top = newNode; // assign new node
            // this.top.next = topPointer; // old top is right after new node

            // simpler way
            newNode.next = this.top;
            this.top = newNode;
        }

        return ++this.length
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }

        const value = this.top.value; 
        this.top = this.top.next;
        this.length--;

        // if (this.isEmpty()) {
        //     this.bottom = null;
        // }

        return value;
    }

    isEmpty() {
        return !this.length;
    }
}

const myStack = new MyStack();
console.log(myStack.push('A'));
console.log(myStack.push('B'));
console.log(myStack.push('C'));
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack);

// Arrays
class MyStackArr {
    constructor() {
        this.arr = [];
    }

    peek() {
        return this.arr[this.arr.length -1];
    }

    push(value) {
        this.arr.push(value);
    }

    pop() {
        return this.arr.pop();
    }

    isEmpty() {
        return !this.arr.length;
    }

}

const myStackArr = new MyStackArr();
console.log(myStackArr.push('A'));
console.log(myStackArr.push('B'));
console.log(myStackArr.push('C'));
console.log(myStackArr);
console.log(myStackArr.pop());
console.log(myStackArr.pop());
console.log(myStackArr.pop());
console.log(myStackArr);


