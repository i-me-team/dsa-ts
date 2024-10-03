/*
 * Intuition behind the approach : https://stackoverflow.com/questions/37253739/intuition-behind-the-algorithm-to-compute-single-source-shortest-path-for-every
 */

import { buildGraph } from '../../representation/build-graph-from-edge-list.ts';

export function shortestPathInDAG(m: number, edges: number[][]) {
  const graph = buildGraph(m, edges);
  let stack: number[] = [];
  const visited = new Set<number>();
  const distances: number[] = new Array(m).fill(Infinity);

  const dfs = (src: number) => {
    visited.add(src);
    for (let edge of graph[src]) {
      if (!visited.has(edge.to)) {
        dfs(edge.to);
      }
    }
    stack.push(src);
  };

  // Src is always taken as 0
  dfs(0);
  distances[0] = 0;
  while (stack.length > 0) {
    const vtx = stack.pop()!;
    // If it's reachable (distance != Infinity), we update the distances of its neighbors.
    for (let edge of graph[vtx]) {
      const newDist = distances[vtx] + (edge.weight ?? 0);
      if (newDist < distances[edge.to]) {
        distances[edge.to] = newDist;
      }
    }
  }
  // Replace Infinity with -1 for unreachable nodes
  return distances.map((d) => (d === Infinity ? -1 : d));
}

const edges = [
  [0, 1, 2],
  [1, 3, 1],
  [2, 3, 3],
  [4, 0, 3],
  [4, 2, 1],
  [5, 4, 1],
  [6, 4, 2],
  [6, 5, 3],
];
const m = 7;

console.log(shortestPathInDAG(m, edges));
