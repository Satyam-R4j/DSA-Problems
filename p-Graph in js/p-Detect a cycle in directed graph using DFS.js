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

    isCycleDirDFS(curr, vis, recPath) {
        vis[curr] = true;
        recPath[curr] = true;
        for (let v of this.adjList[curr]) {
            if (!vis[v]) {
                if (this.isCycleDirDFS(v, vis, recPath)) {
                    return true;
                }
            } else if (recPath[v]) {
                return true;
            }
        }
        recPath[curr] = false;
        return false;
    }

    isCycle() {
        let vis = {};
        let recPath = {};
        for (let vertex in this.adjList) {
            vis[vertex] = false;
        }

        for (let vertex in this.adjList) {
            if (!vis[vertex]) {
                if (this.isCycleDirDFS(vertex, vis, recPath)) {
                    return true;
                }
            }
        }
        return false;
    }
}

let g = new Graph();
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(0, 3);
g.addEdge(1, 2);
g.addEdge(3, 4);

console.log(g.isCycle());

// g.printGraph();
// g.BFS();

// console.log(g.adjList);
