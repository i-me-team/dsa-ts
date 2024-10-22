// Problem link: https://leetcode.com/problems/max-consecutive-ones-iii/description/
export function longestOnes(nums: number[], k: number): number {
  const len = nums.length;
  let max = -Infinity;
  let i = 0,
    j = 0,
    countZ = 0;
  while (j < len) {
    if (nums[j] === 0) {
      countZ++;
    }
    if (countZ <= k) {
      max = Math.max(max, j - i + 1);
    } else {
      while (countZ > k) {
        if (nums[i] === 0) {
          countZ--;
        }
        i++;
      }
    }
    j++;
  }
  return max === -Infinity ? 0 : max;
}
