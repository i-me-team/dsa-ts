/**
 * Problem link: https://leetcode.com/problems/number-of-enclaves/description/
 * Problem similar to Surrounded regions
 * Time: O(m*n)
 * Space: O(m*n)
 */

export function numEnclaves(grid: number[][]): number {
  let res = 0;
  const m = grid.length;
  const n = grid[0].length;
  const visited = new Set<string>();

  const dfsHelper = (i: number, j: number) => {
    // base case
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      grid[i][j] !== 1 ||
      visited.has(`${i}, ${j}`)
    ) {
      return;
    }
    // main case
    visited.add(`${i}, ${j}`);
    dfsHelper(i - 1, j);
    dfsHelper(i + 1, j);
    dfsHelper(i, j - 1);
    dfsHelper(i, j + 1);
  };

  // Traverse the boundary elements and mardk all the connected lands.
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        grid[i][j] === 1 &&
        (i === 0 || i === m - 1 || j === 0 || j === n - 1)
      ) {
        dfsHelper(i, j);
      }
    }
  }

  // Count unvisited land cells
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited.has(`${i}, ${j}`)) {
        res++;
      }
    }
  }

  return res;
}
