import logger from '../../utils/logger.ts';
import Graph from './representation/adjacency-list.ts';

const graph = new Graph<string>();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);

graph.printGraph();

logger(`Neighbors of A:  ${graph.getNeighbors('A')}`);
