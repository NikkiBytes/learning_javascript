// Advanced JS Data Structures

// Graphs
// abstract data type that is meant to implement undirected graph
// and directed graph concepts.

// What is a graph structure?
// finite (maybe mutable) set of vertices/nodes together with a set
// of unordered pairs of these vertices for an undirected grpah or a set
// of ordered pairs for a directed graph.

export default class Graph {
  /**
  * @param {boolean} isDirected
  */
  constuctor(isDirected = false) {
    this.vertices = {};
    this.edges = {};
    this.isDirected = isDirected;

  }
