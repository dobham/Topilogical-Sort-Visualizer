class Graph {
    constructor(nodeCount) {
        this.nodes = []
        this.edges = []
        this.nodeCount = nodeCount

        for (let i = 0; i < this.nodeCount; i++){
            this.nodes.add(new Node(i))
        }
    }

    getNode(id){
        for (let i = 0; i < this.nodeCount; i++){
            if (this.nodes[i].id === id){
                return this.nodes[i]
            }
        }
    }

    addEdge(startNodeID, endNodeID){
        var startNode = this.getNode(startNodeID)
        var endNode = this.getNode(endNodeID)
        startNode.addNeighbour(endNode)
        this.edges.push(toString(startNodeID) + ' - ' + toString(endNodeID))
    }
}