/* Problem link: https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1
 * Time complexity: O(log m * log n)
 */

export function NthRoot(n: number, m: number): number {
  let ans = -1;
  let low = 1,
    high = m;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const res = Math.pow(mid, n);
    if (res === m) {
      ans = mid;
      break;
    } else if (res < m) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}
