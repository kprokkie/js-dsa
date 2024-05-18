// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  // constructor() {
  //   this.data = [];
  // }

  // add(record) {
  //   this.data.unshift(record);
  // }

  // remove() {
  //   return this.data.pop();
  // }
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

module.exports = Queue;
