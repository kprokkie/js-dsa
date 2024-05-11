class MyGraph {
  constructor() {
      this.nodeCount = 0;
      this.adjancentList = {}; // hash table
  }

  addVertex(node) {
      if (!this.adjancentList[node]) {
          this.adjancentList[node] = []; // array
          this.nodeCount++;
      }
  }

  addEdge(node1, node2) {
      // undirected graph - so add edge both ways
      if (this.adjancentList[node1]) {
          this.adjancentList[node1].push(node2);
      }
      if (this.adjancentList[node2]) {
          this.adjancentList[node2].push(node1);
      }
  }

  connections() {
      const allNodes = Object.keys(this.adjancentList);

      for (const node of allNodes) {
          let str = node + ":-->";

          const connections = this.adjancentList[node];
          for (const cNode of connections) {
              str += " " + cNode;
          }

          console.log(str);
      }
  }
}

// graphs = arrays + hash tables + linked list + trees
const myGraph = new MyGraph();

// 6 vertex
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");

// 8 edges
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.connections();