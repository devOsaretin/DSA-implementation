class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vtx) {
    this.adjacencyList.set(vtx, []);
  }

  addEdges(vtx1, vtx2) {
    if (!this.adjacencyList.get(vtx1).includes(vtx2)) {
      this.adjacencyList.get(vtx1).push(vtx2);
    }

    if (!this.adjacencyList.get(vtx2).includes(vtx1)) {
      this.adjacencyList.get(vtx2).push(vtx1);
    }
  }

  removeEdges(vtx1, vtx2) {
    this.adjacencyList.set(
      vtx1,
      this.adjacencyList.get(vtx1).filter((v) => v != vtx2)
    );
    this.adjacencyList.set(
      vtx2,
      this.adjacencyList.get(vtx2).filter((v) => v != vtx1)
    );
  }

  removeVertex(vtx) {
    this.adjacencyList.forEach((value, key) =>
      this.adjacencyList.set(
        key,
        value.filter((v) => v !== vtx)
      )
    );
    this.adjacencyList.delete(vtx);
  }

  dfTraversalRecursive(start) {
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList;
    function dfs(vertex) {
      let vtxNeighbors = adjacencyList.get(vertex);
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      vtxNeighbors.forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    }
    dfs(start);
    return result;
  }

  dfTraversalIterative(start) {
    const stack = [start];
    const visited = {};
    const result = [];
    let current;

    while (stack.length) {
      current = stack.pop();
      visited[current] = true;
      result.push(current);
      this.adjacencyList.get(current).forEach((neighbor) => {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
    return result;
  }

  bfTraversalRecursive(start) {
    const queue = [];
    const visited = {};
    const result = [];

    let adjacencyList = this.adjacencyList;
    const bfs = (vertex) => {
      queue.push(vertex);
      visited[vertex] = true;
      result.push(queue.shift());
      let neighbors = adjacencyList.get(vertex);
      neighbors.forEach((n) => {
        if (!visited[n]) {
          queue.push(n);
        }
      });
      if (queue.length) return;
      bfs(queue.shift());
    };
    bfs(start);
    return result;
  }

  bfTraversalIterative(start) {
    const queue = [start];
    const visited = {};
    const result = [];
    let current;
    while (queue.length) {
      current = queue.shift();
      result.push(current);
      visited[current] = true;
      let neighbors = this.adjacencyList.get(current);

      neighbors.forEach((n) => {
        if (!visited[n]) {
          visited[n] = true;
          queue.push(n);
        }
      });
    }
    return result;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdges("A", "B");
g.addEdges("A", "C");
g.addEdges("B", "D");
g.addEdges("C", "E");
g.addEdges("D", "E");
g.addEdges("D", "F");
g.addEdges("E", "F");

// console.log(g.dfTraversalIterative("A"));
// console.log(g.dfTraversalRecursive("A"));
console.log(g.bfTraversalRecursive("A"));
//console.log(g.bfTraversalIterative("A"));

// g.addVertex("Lagos");
// g.addVertex("Abuja");
// g.addVertex("Edo");
// g.addVertex("Port Harcourt");
// g.addEdges("Lagos", "Abuja");
// g.addEdges("Lagos", "Edo");
// g.addEdges("Lagos", "Port Harcourt");
// g.addEdges("Edo", "Abuja");
// g.addEdges("Abuja", "Port Harcourt");
// // g.removeEdges("Lagos", "Abuja");
// g.removeVertex("Abuja");
// console.log(g);
