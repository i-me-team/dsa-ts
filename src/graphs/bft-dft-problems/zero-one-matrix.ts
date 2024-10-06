/**
 * Problem link:
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n)
 */

import Queue from '../../queues/queue.ts';

const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

export function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  const q = new Queue<[number, number, number]>();
  const result: typeof mat = Array.from(new Array(m), () => new Array(n));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        q.enqueue([i, j, 0]);
        result[i][j] = 0;
      } else {
        result[i][j] = -1;
      }
    }
  }

  while (!q.isEmpty()) {
    const [i, j, steps] = q.dequeue();
    for (let [dr, dc] of DIRECTIONS) {
      const row = i + dr;
      const col = j + dc;
      if (
        row >= 0 &&
        col >= 0 &&
        row < m &&
        col < n &&
        result[row][col] === -1
      ) {
        result[row][col] = steps + 1;
        q.enqueue([row, col, steps + 1]);
      }
    }
  }
  return result;
}
