/**
 * Problem link: https://leetcode.com/problems/search-a-2d-matrix-ii/description/
 * Time complexity: O(m + n)
 * Space complexity: O(1)
 * Naive and optimal Brute force remains the same as search-in-sorted-2d-i.ts
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  let row = 0,
    col = n - 1;
  while (row < m && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      col--;
    }
  }
  return false;
}
