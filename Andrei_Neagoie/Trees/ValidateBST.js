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

  // validate by BFS
  validateBST(root) {

      let currentNode = root || this.root;
      let queue = [];

      queue.push(currentNode);

      while (queue.length) {

          let currentNode = queue.shift();

          if (currentNode.left) {
              if (currentNode.value > currentNode.left.value) {
                  queue.push(currentNode.left)
              } else return false;
          }

          if (currentNode.right) {
              if (currentNode.value < currentNode.right.value) {
                  queue.push(currentNode.right)
              } else return false;
          }

      }

      return true;
  }
}

const myBST = new MyBST();
myBST.insert(101);
myBST.insert(33);
myBST.insert(105);
myBST.insert(37);
myBST.insert(9);
myBST.insert(144);
myBST.insert(104);
console.log(JSON.stringify(myBST))
console.log(myBST.validateBST());

const tree = {
  "root": {
      "value": 101,
      "left": {
          "value": 33,
          "left": {
              "value": 9, // 9 -> 39
              "left": null, "right": null
          },
          "right": {
              "value": 37,
              "left": null, "right": null
          }
      },
      "right": {
          "value": 105,
          "left": {
              "value": 104,
              "left": null, "right": null
          },
          "right": { "value": 94, "left": null, "right": null } // 144 -> 94
      }
  }
};

console.log(myBST.validateBST(tree.root));