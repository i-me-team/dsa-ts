import type Graph from '../representation/adjacency-list.ts';

export function directedHasCycleDFS(graph: Graph<number>): boolean {
  const visited = new Set<number>();
  const pathVisited = new Set<number>();
  const V = graph.verticesList().length;

  const dfs = (vertex: number): boolean => {
    // base case
    if (visited.has(vertex)) {
      return false;
    }
    // main case
    visited.add(vertex);
    pathVisited.add(vertex);

    for (let neighbor of graph.getNeighbors(vertex)) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) {
          return true;
        }
      }
      if (pathVisited.has(neighbor)) {
        return true;
      }
    }

    pathVisited.delete(vertex);
    return false;
  };

  for (let i = 0; i < V; i++) {
    if (dfs(i)) {
      return true;
    }
  }

  return false;
}
