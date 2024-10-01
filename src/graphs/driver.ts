import logger from '../../utils/logger.ts';
import { topologicalSortBFS } from './algorithms/topo-sort.ts';
import {
  hasCycleBFS,
  hasCycleDFS,
} from './bft-dft-problems/ug-cycle-detection.ts';
import Graph from './representation/adjacency-list.ts';

// const graph = new Graph<string>();

// Initial Graph example
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');

// graph.addEdge('A', 'B', 4);
// graph.addEdge('A', 'C', 2);
// graph.addEdge('B', 'C', 1);

// graph.printGraph();

// logger(`Neighbors of A:  ${graph.getNeighbors('A')}`);

// DFS and BFS example

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('D', 'E');
// graph.addEdge('D', 'F');
// graph.addEdge('E', 'F');

// logger(`DFT considering A as starting vertex: ${graph.dfs('A')}`, {
//   color: 'cyan',
// });
// logger(`BFT considering A as starting vertex: ${graph.bfs('A')}`, {
//   color: 'cyan',
// });

// Detecting Cycle in an undirected graph
// Example 1: Graph with no cycle
// const graphNoCycle = new Graph<number>();

// graphNoCycle.addEdge(1, 2);
// graphNoCycle.addEdge(1, 3);
// graphNoCycle.addEdge(2, 4);
// graphNoCycle.addEdge(3, 5);

// logger(
//   `Does the provided graph has cycle(using BFS)? ${hasCycleBFS(graphNoCycle)}`,
// );
// logger(
//   `Does the provided graph has cycle(using DFS)? ${hasCycleDFS(graphNoCycle)}`,
// );

// Example 2: Graph with Cycle
// const graphWithCycle = new Graph<number>();

// graphWithCycle.addEdge(1, 2);
// graphWithCycle.addEdge(2, 3);
// graphWithCycle.addEdge(3, 4);
// graphWithCycle.addEdge(4, 2);

// logger(
//   `Does the provided graph has cycle(using BFS)? ${hasCycleBFS(
//     graphWithCycle,
//   )}`,
// );
// logger(
//   `Does the provided graph has cycle(using DFS)? ${hasCycleDFS(
//     graphWithCycle,
//   )}`,
// );

const graph = new Graph<number>();
const vertices = [0, 1, 2, 3, 4, 5];
vertices.forEach((v) => graph.addVertex(v));

// Add edges
graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

console.log(
  'Topological sorting of the given DAG: ',
  topologicalSortBFS(graph),
);
