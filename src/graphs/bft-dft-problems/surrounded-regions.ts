/**
 * Problem link: https://leetcode.com/problems/surrounded-regions/description/
 Do not return anything, modify board in-place instead.
 Space: O(m*n)
 Time: O(m*n)
 */
export function solve(board: string[][]): void {
  const m = board.length;
  const n = board[0].length;

  const dfsHelper = (i: number, j: number) => {
    // base case
    if (
      i < 0 ||
      j < 0 ||
      i >= m ||
      j >= n ||
      board[i][j] === 'Z' ||
      board[i][j] === 'X'
    ) {
      return;
    }
    // main case
    board[i][j] = 'Z';
    dfsHelper(i - 1, j);
    dfsHelper(i + 1, j);
    dfsHelper(i, j - 1);
    dfsHelper(i, j + 1);
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        board[i][j] === 'O' &&
        (i === 0 || i === m - 1 || j === 0 || j === n - 1)
      ) {
        dfsHelper(i, j);
      }
    }
  }

  // Do the replacing ceremony
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'Z') {
        board[i][j] = 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }
}
