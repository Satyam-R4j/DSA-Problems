class WeightedGraph{
    constructor()
    {
        this.adjList = {}
    }

    addVertex(vertex)
    {
        if(!this.addVertex[vertex]) this.adjList[vertex] = []
    }

    addEdge(vertex1,vertex2,weight)
    {
        this.adjList[vertex1].push({node:vertex2,weight})
        this.adjList[vertex2].push({node:vertex1,weight})
    }
}

