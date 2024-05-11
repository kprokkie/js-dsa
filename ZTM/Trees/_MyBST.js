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

  lookup(value) {
      if (!this.root) {
          return;
      }

      let currentNode = this.root;
      while (false) {
          console.log("--> ", currentNode.value)

          if (currentNode.value === value) {
              return value;
          }

          if (currentNode.value < value) {
              // go right
              if (!currentNode.right) {
                  return;
              }
              currentNode = currentNode.right;

          } else {
              // go left 
              if (!currentNode.left) {
                  return;
              }
              currentNode = currentNode.left;
          }
      }

      // alter
      while (currentNode) {
          if (currentNode.value < value) {
              // go right
              currentNode = currentNode.right;
          } else if (currentNode.value > value) {
              // go left 
              currentNode = currentNode.left;
          } else {
              return currentNode;
          }
      }
      return false;
  }

  delete(value) {

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
console.log(myBST.lookup(144));
console.log(myBST.lookup(20));
console.log(myBST.lookup(101));