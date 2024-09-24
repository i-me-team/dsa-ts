import logger from '../../utils/logger.ts';
import Graph from './representation/adjacency-list.ts';

const graph = new Graph<string>();

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

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

logger(`DFT considering A as starting vertex: ${graph.dfs('A')}`, {
  color: 'cyan',
});
logger(`BFT considering A as starting vertex: ${graph.bfs('A')}`, {
  color: 'cyan',
});
