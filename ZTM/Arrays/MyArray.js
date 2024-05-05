class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    delete(index) {}

    insert(index) {}
}

const mArr = new MyArray();
mArr.push("A");
mArr.push("B");
console.log(mArr);
console.log(mArr.get(1));
console.log(mArr.pop());
console.log(mArr);
