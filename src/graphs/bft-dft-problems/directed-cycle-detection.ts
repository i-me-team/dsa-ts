import Queue from '../../queues/queue.ts';
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

export function directedHasCycleBFS(graph: Graph<number>): boolean {
  const V = graph.verticesList().length;
  const q = new Queue<number>();
  const inDegrees: number[] = new Array(V).fill(0);
  const res: number[] = [];

  for (let i = 0; i < V; i++) {
    for (let neighbor of graph.getNeighbors(i)) {
      inDegrees[neighbor]++;
    }
  }

  inDegrees.forEach((el, idx) => el === 0 && q.enqueue(idx));

  while (!q.isEmpty()) {
    const vtx = q.dequeue();
    res.push(vtx);
    for (let nbr of graph.getNeighbors(vtx)) {
      inDegrees[nbr]--;
      if (inDegrees[nbr] === 0) {
        q.enqueue(nbr);
      }
    }
  }

  return !(res.length === V);
}
