// Problem link: https://leetcode.com/problems/shortest-path-in-binary-matrix/
// Here I did this problem with Dijkstra's approach using PriorityQueue. But if you look closely there is no need to use that. Why? Unit weight --> Best algorithm is BFS

import PriorityQueue from '../../../queues/priority-queue.ts';
import Queue from '../../../queues/queue.ts';

const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];
export function shortestPathBinaryMatrix(grid: number[][]): number {
  // edge case
  if (grid[0][0] === 1) return -1;

  const n = grid.length;
  const distances = Array.from({ length: n }, () =>
    new Array(n).fill(Infinity),
  );
  const q = new Queue<[number, number, number]>();
  //   const pq = new PriorityQueue<[number, number, number]>((a, b) => a[2] - b[2]);

  // Init phase
  distances[0][0] = 1;
  q.enqueue([0, 0, 1]);
  //   pq.enqueue([0, 0, 1]);

  while (!q.isEmpty()) {
    const [i, j, dist] = q.dequeue()!;
    if (i === n - 1 && j === n - 1) {
      return dist;
    }
    for (let [dr, dc] of DIRECTIONS) {
      const row = dr + i;
      const col = dc + j;
      if (row >= 0 && row < n && col >= 0 && col < n && grid[row][col] === 0) {
        const newDist = dist + 1;
        if (newDist < distances[row][col]) {
          distances[row][col] = newDist;
          q.enqueue([row, col, newDist]);
        }
      }
    }
  }
  return -1;
}
