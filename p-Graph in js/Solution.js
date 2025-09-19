class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }

    addEdge(u, v) {
        if (!this.adjList[u]) {
            this.addVertex(u);
        }
        if (!this.adjList[v]) {
            this.addVertex(v);
        }
        this.adjList[u].push(v);
        this.adjList[v].push(u);
    }

    printGraph() {
        for (let vertex in this.adjList) {
            console.log(vertex, "->", this.adjList[vertex].join(", "));
        }
    }
}

let g = new Graph();

g.addVertex(0);
g.addVertex(1);
g.addVertex(2);

g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.addEdge(2, 4);

g.printGraph()

console.log(g.adjList);
