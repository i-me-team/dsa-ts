/**
 * Problem link: https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/
 * Time complexity: O(N * log(maxNum))
 */
export function smallestDivisor(nums: number[], threshold: number): number {
  const isValidDivisor = (divisor: number): boolean => {
    const sum = nums.reduce((acc, curr) => acc + Math.ceil(curr / divisor), 0);
    return sum <= threshold;
  };

  let low = 1,
    high = Math.max(...nums);
  let ans = 0;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (isValidDivisor(mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}
