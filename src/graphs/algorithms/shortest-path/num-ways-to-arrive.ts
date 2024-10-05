// Problem link: https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/description/
import PriorityQueue from '../../../queues/priority-queue.ts';

type Pair = [number, number];

export function countPaths(n: number, roads: number[][]): number {
  const ways: number[] = new Array(n).fill(0);
  const distances: number[] = new Array(n).fill(Infinity);
  const pq = new PriorityQueue<[number, number]>((a, b) => a[0] - b[0]);
  const graph: Pair[][] = Array.from({ length: n }, () => []);
  const MOD = 1e9 + 7;

  roads.forEach(([from, to, time]) => {
    graph[from].push([to, time]);
    graph[to].push([from, time]);
  });

  // Init phase
  pq.enqueue([0, 0]);
  ways[0] = 1;
  distances[0] = 0;

  while (!pq.isEmpty()) {
    const [dist, node] = pq.dequeue()!;

    for (let [nbr, d] of graph[node]) {
      const newDist = dist + d;
      if (newDist < distances[nbr]) {
        distances[nbr] = newDist;
        ways[nbr] = ways[node];
        pq.enqueue([newDist, nbr]);
      } else if (newDist === distances[nbr]) {
        ways[nbr] = (ways[nbr] + ways[node]) % MOD;
      }
    }
  }

  return ways[n - 1] % MOD;
}
