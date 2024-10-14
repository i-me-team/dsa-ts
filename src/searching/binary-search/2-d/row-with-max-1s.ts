/**
 * Problem link: https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1
 * Time complexity: O(n * log m)
 * Space complexity: O(1)
 */

export function rowWithMax1s(arr: number[][]): number {
  const bs = (rw: number[]) => {
    const len = rw.length - 1;
    let low = 0,
      high = len;
    let ans = -1;
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      if (rw[mid] === 1) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return ans === -1 ? ans : len - ans + 1;
  };

  let maxCount = -1;
  let rowIdx = -1;
  let maxRowIdx = -1;
  for (let row of arr) {
    const countOf1s = bs(row);
    rowIdx++;
    if (countOf1s > maxCount) {
      maxCount = countOf1s;
      maxRowIdx = rowIdx;
    }
  }
  return maxRowIdx;
}
