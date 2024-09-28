export function countDistinctIslands(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const distinctIslands = new Set<string>();
  const visited = new Set<string>();

  function dfs(
    i: number,
    j: number,
    baseR: number,
    baseC: number,
    path: string[],
  ): void {
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      grid[i][j] === 0 ||
      visited.has(`${i},${j}`)
    ) {
      return;
    }

    visited.add(`${i},${j}`);
    path.push(`${i - baseR},${j - baseC}|`);

    dfs(i - 1, j, baseR, baseC, path);
    dfs(i + 1, j, baseR, baseC, path);
    dfs(i, j - 1, baseR, baseC, path);
    dfs(i, j + 1, baseR, baseC, path);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited.has(`${i},${j}`)) {
        const arr: string[] = [];
        dfs(i, j, i, j, arr);
        distinctIslands.add(arr.join('|'));
      }
    }
  }

  return distinctIslands.size;
}

// Test the function
const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
];

console.log(`Number of distinct islands: ${countDistinctIslands(grid)}`);
