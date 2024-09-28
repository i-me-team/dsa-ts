import Queue from '../../queue/queue.ts';
import type Graph from '../representation/adjacency-list.ts';

/**
 * Method 1: Using the chromatic number property(by both BFS and DFS)
 * Method 2: Using the odd cycle checking property (by both BFS and DFS)
 */
export function isBipartiteColoringDFS(graph: Graph<number>): boolean {
  const n = graph.verticesList().length;
  const colors = new Array(n).fill(-1); // -1 unprocessed, 0: Red, 1: green

  const dfsHelper = (i: number, color: number): boolean => {
    colors[i] = color;
    for (let neighbor of graph.getNeighbors(i)) {
      if (colors[neighbor] === -1) {
        if (!dfsHelper(neighbor, 1 - color)) {
          // 1 - color assigning the opposite color whatsoever that may be
          return false;
        }
      } else if (colors[neighbor] === color) {
        // Adjacent colors are same
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < n; i++) {
    if (colors[i] === -1 && !dfsHelper(i, 0)) {
      return false;
    }
  }

  return true;
}

export function isBipartiteColoringBFS(graph: Graph<number>): boolean {
  const q = new Queue<number>();
  const n = graph.verticesList().length;
  const colors = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    if (colors[i] !== -1) continue;
    colors[i] = 0; // Start
    q.enqueue(i);
    while (!q.isEmpty()) {
      const currVertex = q.dequeue();
      for (let neighbor of graph.getNeighbors(currVertex)) {
        if (colors[neighbor] === -1) {
          colors[neighbor] = 1 - colors[currVertex];
          q.enqueue(neighbor);
        } else if (colors[neighbor] === colors[currVertex]) {
          return false;
        }
      }
    }
  }

  return true;
}
