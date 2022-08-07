const PriorityQueue = require("../binaryHeap/priorityQueue");
class WeightedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vtx) {
    this.adjacencyList.set(vtx, []);
  }

  addEdges(vtx1, vtx2, weight) {
    if (!this.adjacencyList.get(vtx1).includes(vtx2)) {
      this.adjacencyList.get(vtx1).push({ node: vtx2, weight });
    }

    if (!this.adjacencyList.get(vtx2).includes(vtx1)) {
      this.adjacencyList.get(vtx2).push({ node: vtx1, weight });
    }
  }

  dijkstra(src, dest) {
    const distances = {};
    const previous = {};
    const visited = {};
    let path = [];
    const priorityQueue = new PriorityQueue();
    this.adjacencyList.forEach((vertex, key) => {
      if (key === src) {
        distances[key] = 0;
        priorityQueue.enqueue(key, 0);
      } else {
        distances[key] = Infinity;
        priorityQueue.enqueue(key, Infinity);
      }
      previous[key] = null;
    });

    while (priorityQueue.values.length) {
      let vtx = priorityQueue.dequeue().val;

      if (vtx === dest) {
        while (previous[vtx]) {
          path.push(vtx);
          vtx = previous[vtx];
        }
        break;
      }

      this.adjacencyList.get(vtx).forEach((neighbor) => {
        visited[vtx] = true;
        let total = distances[vtx] + neighbor.weight;
        if (!visited[neighbor.node]) {
          if (distances[neighbor.node] > total) {
            distances[neighbor.node] = total;
            priorityQueue.enqueue(neighbor.node, total);
            previous[neighbor.node] = vtx;
          }
        }
      });
    }

    return path.concat(src).reverse();
  }
}

const wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdges("A", "B", 4);
wg.addEdges("A", "C", 2);
wg.addEdges("B", "E", 3);
wg.addEdges("C", "D", 2);
wg.addEdges("C", "F", 4);
wg.addEdges("D", "E", 3);
wg.addEdges("D", "F", 1);
wg.addEdges("E", "F", 1);
console.log(wg.dijkstra("B", "F"));
//console.log(wg);
