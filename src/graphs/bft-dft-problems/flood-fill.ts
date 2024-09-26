// https://leetcode.com/problems/flood-fill/description/

/*
 * Time complexity: O(mxn)
 * Space complexity: O(mxn)
 */

const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const oldColor = image[sr][sc];
  const m = image.length;
  const n = image[0].length;

  const dfsHelper = (i: number, j: number) => {
    // base case
    if (image[i][j] === color) return;
    // main case
    image[i][j] = color;
    for (let [dr, dc] of DIRECTIONS) {
      const row = i + dr;
      const col = j + dc;
      if (
        row >= 0 &&
        col >= 0 &&
        row < m &&
        col < n &&
        image[row][col] === oldColor
      ) {
        dfsHelper(row, col);
      }
    }
  };

  dfsHelper(sr, sc);

  return image;
}
