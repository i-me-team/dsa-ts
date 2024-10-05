import Queue from '../../../queues/queue.ts';
import {
  buildGraph,
  type Edge,
} from '../../representation/build-graph-from-edge-list.ts';

export function shortestPathUG(edges: number[][], n: number, src: number) {
  const q = new Queue<Edge>();
  const visited = new Set();
  const distances = new Array(n).fill(Infinity);
  const graph = buildGraph(n, edges);

  distances[src] = 0;
  visited.add(src);
  q.enqueue({ to: src });

  while (!q.isEmpty()) {
    const vtx = q.dequeue();
    for (let nbr of graph[vtx.to]) {
      if (!visited.has(nbr)) {
        q.enqueue(nbr);
        visited.add(nbr);
        const newDist = distances[vtx.to] + 1;
        if (newDist < distances[nbr.to]) {
          distances[nbr.to] = newDist;
        }
      }
    }
  }
  return distances.map((d) => (d === Infinity ? -1 : d));
}
