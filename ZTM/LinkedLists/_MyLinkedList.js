class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyLinkedList {
    constructor(value) {
        // this.head = {
        //     value: value,
        //     next: null
        // }
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    // append via tail
    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    // prepend via head
    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        let newNode = new Node(value);

        let currentNode = this.head;
        let currentIndex = 0;

        // index = 0 means prepend, 
        if (index === 0) {
            this.prepend(value);
            return this;
        }

        // index > this.length means append
        if (index >= this.length) {
            this.append(value);
            return this;
        }

        while (currentIndex < index - 1) {
            if (currentNode) {
                currentNode = currentNode.next;
                currentIndex++;
            }
        }

        // attach the new node link
        newNode.next = currentNode.next;

        // break the existing link
        currentNode.next = newNode;

        this.length++;
        return this;
    }

    remove(index) {

        if (index > this.length) {
            return this;
        }

        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return this;
        }

        let currentIndex = 0;
        let currentNode = this.head;

        while (currentIndex < index - 1) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        const deleteNode = currentNode.next;
        currentNode.next = deleteNode.next

        this.length--;
        return this;
    }

    print() {
        let currentNode = this.head;

        if (!currentNode) {
            return [];
        }

        let result = [];

        while (currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return result;
    }

    reverse() {
        if (this.length === 1) {
            return this;
        }
        // TODO

    }
}

const ll = new MyLinkedList(5);
ll.append(10);
ll.append(15);
ll.prepend(1);
ll.insert(2, 8)
ll.insert(4, 12)
ll.remove(1);
console.log(ll.print());
ll.reverse();
console.log(ll.print());

// 10 --> 5 --> 16

let llObject = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
};