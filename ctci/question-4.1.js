/*
4.1 Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes
*/
const Graph = require('../graph.js');
const Queue = require('../queue.js')

function checkRoute(name1, name2, graph) {
    const name1vertexs = graph.getVertex(name1);    
    let unvisitedQueue = new Queue();
    for (let vertx of name1vertexs) {
        if (vertx == name2) return true;
        else unvisitedQueue.add(vertx);
    }
    while(!unvisitedQueue.isEmpty()) {
        const tovisit = unvisitedQueue.remove();
        const tovisitVertexs = graph.getVertex(tovisit);
        for (let vertx of tovisitVertexs) {
            if (vertx == name2) return true;
            else unvisitedQueue.add(vertx);
        }
    }
    return false;
}

let graph = new Graph();
/*
0: 1
1: 2
2: 0, 3
3: 2
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 2);
*/
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');

console.log(graph);

console.log(checkRoute('A', 'C', graph), true);
console.log(checkRoute('A', 'E', graph), false);
