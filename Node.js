class Node {
    constructor(id) {
        this.vert = id
        this.neighbours = []
    }

    addNeighbour(edge){
        if(this.neighbours.contains(edge)){
            print("This edge is already filled")
        } else{
            print("Added" + edge)
            this.neighbours.push(edge)
        }
    }
}