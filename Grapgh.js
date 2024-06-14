class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].delete(vertex2);
        }
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].delete(vertex1);
        }
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return;
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    BFS(start){
        let queue=[start]
        let result=[]
        let visited={}
        visited[start]=true
        while(queue.length){
            let curr=queue.shift()
            result.push(curr)
            this.adjacencyList[curr].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour]=true
                    queue.push(neighbour)
                }

            });
        }
        return result
    }
    DFS(start) {
        let result = [];
        let visited = {};
        
        const traverse = (vertex) => {
            if (!vertex) return;
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    traverse(neighbour);
                }
            });
        };
        traverse(start);
        return result;
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph();
graph.addVertex(10);
graph.addVertex(20);
graph.addVertex(30);
graph.addVertex(40);
graph.addEdge(10, 40);
graph.addEdge(20, 30);
graph.display();
console.log("BFS starting from vertex 10:");
console.log(graph.BFS(10));
console.log("DFS starting from vertex 10:");
console.log(graph.DFS(10));


// console.log("After removing edge 10-40:");
// graph.removeEdge(10, 40);
// graph.display();
// console.log("After removing vertex 20:");
// graph.removeVertex(20);
// graph.display();
