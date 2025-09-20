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

    BFS() {
        let qu = [];
        let vis = {};

        let start = Object.keys(this.adjList)[0];
        qu.push(start);
        vis[start] = true;

        while (qu.length > 0) {
            let u = qu.shift();
            console.log(u);
            for (let v of this.adjList[u]) {
                if (!vis[v]) {
                    vis[v] = true;
                    qu.push(v);
                }
            }
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

// g.printGraph();
g.BFS();

// console.log(g.adjList);
