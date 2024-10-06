// Problem link: https://leetcode.com/problems/path-with-minimum-effort/description/

import PriorityQueue from '../../../queues/priority-queue.ts';

const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
export function minimumEffortPath(heights: number[][]): number {
  const m = heights.length;
  const n = heights[0].length;
  const distances: number[][] = Array.from({ length: m }, () =>
    new Array(n).fill(Infinity),
  );
  const pq = new PriorityQueue<[number, number, number]>((a, b) => a[0] - b[0]);

  // Init phase
  distances[0][0] = 0;
  pq.enqueue([0, 0, 0]);

  while (!pq.isEmpty()) {
    const [diff, i, j] = pq.dequeue()!;
    // Always reachable so no need to return from here. Just break and return from main function
    if (i === m - 1 && j === n - 1) break;

    for (let [dr, dc] of DIRECTIONS) {
      const row = dr + i;
      const col = dc + j;
      if (row >= 0 && row < m && col >= 0 && col < n) {
        const newDiff = Math.max(
          diff,
          Math.abs(heights[row][col] - heights[i][j]),
        );
        if (newDiff < distances[row][col]) {
          distances[row][col] = newDiff;
          pq.enqueue([newDiff, row, col]);
        }
      }
    }
  }
  return distances[m - 1][n - 1];
}
