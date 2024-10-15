/**
 * Problem link: https://leetcode.com/problems/search-a-2d-matrix/
 * First Solution:
 * Time Complexity: O(m) + (log n) --> Done only once
 * Space Complexity: O(1)
 */
export function searchMatrix1(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  let isFound = false;

  const bs = (arr: number[]): boolean => {
    let low = 0,
      high = n - 1;
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      if (arr[mid] === target) {
        return true;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return false;
  };

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] <= target && target <= matrix[i][n - 1]) {
      if (bs(matrix[i])) {
        isFound = true;
        break;
      }
    }
  }
  return isFound;
}

/**
 * Optimal Solution:
 * Try to flatten the array and then apply binary Search. But the point to note here is we're not actually flattening the array but actually using a formula to find the index of element in flattened array
 * Formula for converting 1D index to a 2D index: (1dIdx / n, 1dIdx % n)
 * Time Complexity: O(m * n)
 * Space Complexity: O(1)
 */

export function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length; // row
  const n = matrix[0].length; // col
  let low = 0,
    high = m * n - 1;
  // Formula for converting 1D index to a 2D index: (1dIdx / n, 1dIdx % n)
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const r = Math.floor(mid / n);
    const c = mid % n;
    if (matrix[r][c] === target) {
      return true;
    } else if (matrix[r][c] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}
