class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class MyBST {
  constructor() {
      this.root = null;
  }

  insert(value) {
      const newNode = new Node(value);

      if (!this.root) {
          this.root = newNode;
          return this;
      }

      let currentNode = this.root;

      // to repeat this use while
      while (true) {
          if (currentNode.value < value) {
              // go right
              if (!currentNode.right) {
                  currentNode.right = newNode;
                  return this;
              }
              currentNode = currentNode.right;

          } else {
              // go left 
              if (!currentNode.left) {
                  currentNode.left = newNode;
                  return this;
              }
              currentNode = currentNode.left;
          }
      }
  }

  // traversal
  traversalBFSIterative() {

      let currentNode = this.root;
      let list = [];
      let queue = [];
      queue.push(currentNode);

      while (queue.length) {
          currentNode = queue.shift();

          list.push(currentNode.value);

          if (currentNode.left) {
              queue.push(currentNode.left);
          }

          if (currentNode.right) {
              queue.push(currentNode.right);
          }
      }

      return list;
  }

  traversalBFSRecursive(queue, list) {
      // base case
      if(!queue.length) {
          return list;
      }

      let currentNode = queue.shift();

      list.push(currentNode.value);

      currentNode.left && queue.push(currentNode.left);
      currentNode.right && queue.push(currentNode.right);

      return this.traversalBFSRecursive(queue, list);
  }

  traversalBFSRecursiveWrapper() {

      let currentNode = this.root;
      let list = [];
      let queue = [];
      queue.push(currentNode);

      return this.traversalBFSRecursive(queue, list);
  }

}

const myBST = new MyBST();
myBST.insert(9);
myBST.insert(4);
myBST.insert(6);
myBST.insert(20);
myBST.insert(170);
myBST.insert(15);
myBST.insert(1);
// console.log(JSON.stringify(myBST));

//       9
//   4       20
// 1   6   15   170
console.log(myBST.traversalBFSIterative());
console.log(myBST.traversalBFSRecursiveWrapper());