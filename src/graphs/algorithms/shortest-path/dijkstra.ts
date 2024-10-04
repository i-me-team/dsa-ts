import logger from '../../../../utils/logger.ts';
import PriorityQueue from '../../../queues/priority-queue.ts';

/**
 * Time complexity of Dijkstra's algorithm is very important to derive.
 * Total time: O(V logV) + O(E logV) -> O((V + E)logV) or if we take E in terms of V So we know in worst case E = V^2(Complete graph). So final time: O(V^2 logV)
 */

export function dijkstra(V: number, Adj: number[][][], S: number) {
  const pq = new PriorityQueue<number>();
  const distances = new Array(V).fill(Infinity); // O(V) time

  // Init phase
  pq.enqueue(S, 0);
  distances[S] = 0;

  while (!pq.isEmpty()) {
    const node = pq.dequeue()!; // O(log V). Now since pq can contain all the vertices. So worst case O(V logV)

    for (let [v, wt] of Adj[node]) {
      const newDist = distances[node] + wt;
      // Called relaxation
      if (newDist < distances[v]) {
        distances[v] = newDist;
        pq.enqueue(v, newDist); // O(log V). Now since in worst case the relaxation takes O(E logV). Why E? Because the relaxation can happen for all the Edges of the graph.
      }
    }
  }

  return distances;
}

// Example usage:
const V = 4; // Number of vertices
const S = 0; // Source vertex

// Adjacency list representation of the graph
const adj: [number, number][][] = Array.from({ length: V }, () => []);

// Add edges
adj[0].push([1, 5]);
adj[0].push([2, 8]);
adj[1].push([2, 9]);
adj[1].push([3, 2]);
adj[2].push([3, 6]);

const result = dijkstra(V, adj, S);
logger(`Shortest distances from source: ${result}`);
