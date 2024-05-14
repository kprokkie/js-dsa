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

  // inorder
  traversalDFSInorderRecursive(node, list) {
      if (node.left) {
          this.traversalDFSInorderRecursive(node.left, list) // SC: O(d) depth of tree, function in call stack
      }

      list.push(node.value);

      if (node.right) {
          this.traversalDFSInorderRecursive(node.right, list)
      }
      return list;
  }

  traversalDFSInorderRecursiveWrapper() {
      return this.traversalDFSInorderRecursive(this.root, []);
  }

  // preorder
  traversalDFSPreorderRecursive(node, list) {
      list.push(node.value);

      if (node.left) {
          this.traversalDFSPreorderRecursive(node.left, list)
      }

      if (node.right) {
          this.traversalDFSPreorderRecursive(node.right, list)
      }
      return list;
  }

  traversalDFSPreorderRecursiveWrapper() {
      return this.traversalDFSPreorderRecursive(this.root, []);
  }

  // postorder
  traversalDFSPostorderRecursive(node, list) {
      if (node.left) {
          this.traversalDFSPostorderRecursive(node.left, list)
      }

      if (node.right) {
          this.traversalDFSPostorderRecursive(node.right, list)
      }

      list.push(node.value);
      return list;
  }

  traversalDFSPostorderRecursiveWrapper() {
      return this.traversalDFSPostorderRecursive(this.root, []);
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
console.log(myBST.traversalDFSInorderRecursiveWrapper()); // [1, 4, 6, 9, 15, 20, 170]
console.log(myBST.traversalDFSPreorderRecursiveWrapper()); // [9, 4, 1, 6, 20, 15, 170]
console.log(myBST.traversalDFSPostorderRecursiveWrapper()); // [1, 6, 4, 15, 170, 20, 9]