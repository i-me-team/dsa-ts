/**
 * Problem link: https://leetcode.com/problems/magnetic-force-between-two-balls/description/
 * Time complexity: O(N * log N[sorting] + log(((maxOfArray - minOfArray))) * N)
 */

export function maxDistance(position: number[], m: number): number {
  const len = position.length;
  const tempArr = position.toSorted((a, b) => a - b);

  const canAlignBalls = (magForce: number): boolean => {
    let count = 1;
    let last = tempArr[0];
    for (let i = 1; i < len; i++) {
      if (tempArr[i] - last >= magForce) {
        count++;
        last = tempArr[i];
      }
      if (count >= m) return true;
    }
    return false;
  };

  let low = 1,
    high = tempArr[len - 1] - tempArr[0],
    ans = 0;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (canAlignBalls(mid)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}
