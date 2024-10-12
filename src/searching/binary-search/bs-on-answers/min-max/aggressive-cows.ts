/**
 * Problem link: https://www.geeksforgeeks.org/problems/aggressive-cows/0
 */

export function solve(n: number, k: number, stalls: number[]): number {
  const tempArr = stalls.toSorted((a, b) => a - b);
  let low = 1,
    high = tempArr[n - 1] - tempArr[0];
  let ans = 0;

  const canPlaceCows = (dist: number): boolean => {
    let count = 1,
      last = tempArr[0];
    for (let i = 1; i < n; i++) {
      if (tempArr[i] - last >= dist) {
        count++;
        last = tempArr[i];
      }
      if (count >= k) return true;
    }
    return false;
  };

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (canPlaceCows(mid)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}
