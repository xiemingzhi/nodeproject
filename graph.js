/*
class Node {
 public String name;
 public Node [] children;
}
*/
function Vertex(name) {
    this.name = name;
    this.childs = [];
}
/*
G=(V, E)
class Graph {
 public Node[] nodes;
}
Map<'name', []> adjacent list
0: 1
1: 2
2: 0, 3
3: 2
4: 6
5: 4
6: 5
*/
function Graph() {
    this.vertexs = new Map();
    this.addVertex = function(name) {
        this.vertexs.set(name, []);
    }
    this.addEdge = function(name1, name2) {
        if (this.vertexs.has(name1) && this.vertexs.has(name2)) {
            this.vertexs.get(name1).push(name2);
            return true;
        }
        return false;
    }
    this.getVertex = function(name) {
        return this.vertexs.get(name);
    }
}

module.exports = Graph;