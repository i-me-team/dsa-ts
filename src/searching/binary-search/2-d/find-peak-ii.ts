/**
 * Problem link: https://leetcode.com/problems/find-a-peak-element-ii/description/
 * Space complexity: O(1)
 * Time complexity: O(n log(m))
 */
export function findPeakGrid(mat: number[][]): number[] {
  const m = mat.length;
  const n = mat[0].length;
  let low = 0,
    high = n - 1;
  const res = [];
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    // Finding max in column
    const maxRow = mat.reduce(
      (maxIndex, _, i) => (mat[i][mid] > mat[maxIndex][mid] ? i : maxIndex),
      0,
    );

    const left = mid - 1 >= 0 ? mat[maxRow][mid - 1] : -1;
    const right = mid + 1 < n ? mat[maxRow][mid + 1] : -1;
    if (mat[maxRow][mid] > left && mat[maxRow][mid] > right) {
      res.push(maxRow, mid);
      break;
    } else if (mat[maxRow][mid] < left) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return res;
}
