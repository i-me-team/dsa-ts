import Queue from '../../queues/queue.ts';
import Graph from '../representation/adjacency-list.ts';

/**
 * Time complexity: O(V + 2E)
 * Space complexity: O(V) (Keeping a queue + Keeping a visited)
 */

type Pair<T> = [T, T | null];
function hasCycleBFS<T>(graph: Graph<T>): Boolean {
  const visited = new Set<T>();
  const queue = new Queue<Pair<T>>();

  const bfsHelper = (vertex: T): Boolean => {
    queue.enqueue([vertex, null]);

    while (!queue.isEmpty()) {
      const [currVertex, parentOfCurrVertex] = queue.dequeue();
      for (let neighbor of graph.getNeighbors(currVertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.enqueue([neighbor, currVertex]);
        } else if (neighbor !== parentOfCurrVertex) {
          return true;
        }
      }
    }

    return false;
  };

  //For factoring in connected components in a graph
  for (let vertex of graph.verticesList()) {
    if (!visited.has(vertex) && bfsHelper(vertex)) {
      return true;
    }
  }

  return false;
}

function hasCycleDFS<T>(graph: Graph<T>): boolean {
  const visited = new Set<T>();

  const dfsHelper = (vertex: T, parent: T | null): boolean => {
    visited.add(vertex);
    for (let neighbor of graph.getNeighbors(vertex)) {
      if (!visited.has(neighbor)) {
        return dfsHelper(neighbor, vertex);
      } else if (neighbor !== parent) {
        return true;
      }
    }
    return false;
  };

  // For factoring in the connected components of a graph
  for (let vertex of graph.verticesList()) {
    if (!visited.has(vertex) && dfsHelper(vertex, null)) {
      return true;
    }
  }

  return false;
}

export { hasCycleDFS, hasCycleBFS };
