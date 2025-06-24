class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        this.AdjList.set(v, []);
    }

    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    printGraph() {
        let keys = this.AdjList.keys();

        for (let i of keys) {
            let values = this.AdjList.get(i);
            var conc = "";

            for (let j of values) {
                conc = conc + j + " ";
            }

            console.log(i + " -> " + conc);
        }
    }

    BFS(start) {
        let visited = {};
        let q = new Queue();

        visited[start] = true;
        q.enqueue(start);

        while (!q.isEmpty()) {
            let getQueueElement = q.dequeue();

            console.log(getQueueElement);

            let getList = this.AdjList.get(getQueueElement);

            for (let i in getList) {
                let neigh = getList[i];

                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }

    DFS(start) {
        let visited = new Set();
        const stack = [start];

        while (stack.length > 0) {
            const vertex = stack.pop();

            if (!visited.has(vertex)) {
                visited.add(vertex);
                
                console.log(vertex);

                const neighbors = this.AdjList.get(vertex);
                
                for (let neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
    }
}

let graph = new Graph(6);
let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "D");
graph.addEdge("A", "E");
graph.addEdge("B", "C");
graph.addEdge("C", "E");
graph.addEdge("C", "F");
graph.addEdge("D", "E");
graph.addEdge("E", "F");

graph.printGraph();

console.log("BFS");
graph.BFS('A');

console.log("DFS");
graph.DFS("A");
