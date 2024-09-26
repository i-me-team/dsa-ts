/**
 * Problem link: https://leetcode.com/problems/rotting-oranges/
 * Space: O(mxn) queue
 * Time: O(mxn) for every nodes
 */

import Queue from '../../queue/queue.ts';

type IndicesTimePair = [number, number, number];

const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

export function orangesRotting(grid: number[][]): number {
  const queue = new Queue<IndicesTimePair>();
  const m = grid.length;
  const n = grid[0].length;
  let minsToRotAll = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.enqueue([i, j, 0]);
      }
    }
  }

  while (!queue.isEmpty()) {
    const [currI, currJ, currTime] = queue.dequeue();
    minsToRotAll = Math.max(minsToRotAll, currTime);
    for (let [dr, dc] of DIRECTIONS) {
      const row = currI + dr;
      const col = currJ + dc;
      if (row >= 0 && col >= 0 && row < m && col < n && grid[row][col] === 1) {
        queue.enqueue([row, col, currTime + 1]);
        grid[row][col] = 2;
      }
    }
  }

  return grid.some((row) => row.includes(1)) ? -1 : minsToRotAll;
}
