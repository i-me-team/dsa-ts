/**
 * @param {character[][]} grid
 * @return {number}
 */

const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
export function numIslands(grid: string[][]) {
  const visited = new Set<string>();
  let countOfIslands = 0;
  const m = grid.length;
  const n = grid[0].length;

  const dfsHelper = (i: number, j: number): void => {
    visited.add(`${i}, ${j}`);
    for (let [dr, dc] of DIRECTIONS) {
      const row = i + dr;
      const col = j + dc;
      if (
        row >= 0 &&
        col >= 0 &&
        row < m &&
        col < n &&
        grid[row][col] === '1' &&
        !visited.has(`${row}, ${col}`)
      ) {
        dfsHelper(row, col);
      }
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1' && !visited.has(`${i}, ${j}`)) {
        countOfIslands++;
        dfsHelper(i, j);
      }
    }
  }

  return countOfIslands;
}
