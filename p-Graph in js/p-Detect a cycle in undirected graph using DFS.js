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

    isCycleUndirDFS(src, parent, vis) {
        vis[src] = true;
        for (let v of this.adjList[src]) {
            if (!vis[v]) {
                if (this.isCycleUndirDFS(v, src, vis)) {
                    return true;
                }
            } else if (v !== parent) {
                return true;
            }
        }
        return false;
    }

    isCycle() {
        let vis = {};
        for (let vertex in this.adjList) {
            vis[vertex] = false;
        }

        for (let vertex in this.adjList) {
            if (!vis[vertex]) {
                if (this.isCycleUndirDFS(vertex, -1, vis)) {
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

let res = g.isCycle();

console.log(res);

// g.printGraph();
// g.BFS();

// console.log(g.adjList);
