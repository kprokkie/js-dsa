class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null; // dll
    }
}

class MyDoublyLinkedList {
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

        newNode.prev = this.tail; // dll

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    // prepend via head
    prepend(value) {
        const newNode = new Node(value);

        this.head.prev = newNode; // dll

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

        // TODO

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
        currentNode.next = deleteNode.next;

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
}

const dll = new MyDoublyLinkedList(5);
dll.append(10);
dll.append(15);
dll.prepend(1);
// dll.insert(2, 8)
// dll.insert(4, 12)
// console.log(dll.print());
// dll.remove(1);
console.log(dll.print());
console.log(dll);
