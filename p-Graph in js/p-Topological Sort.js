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
        if (!this.adjList[u]) this.addVertex(u);
        if (!this.adjList[v]) this.addVertex(v);
        this.adjList[u].push(v);
    }

    DFS(curr, vis, stk) {
        vis[curr] = true;
        for (let v of this.adjList[curr]) {
            if (!vis[v]) {
                this.DFS(v, vis, stk);
            }
        }
        stk.push(curr);
    }

    topologicalSort() {
        let vis = [];
        let stk = [];
        for (let vertex in this.adjList) {
            if (!vis[vertex]) {
                this.DFS(vertex, vis, stk);
            }
        }

        while (stk.length > 0) {
            console.log(stk.shift());
        }
    }
}

let g = new Graph();
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);

// Add directed edges (no cycles)
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.addEdge(3, 4);

console.log(g.topologicalSort());

// g.printGraph();
// g.BFS();

// console.log(g.adjList);
