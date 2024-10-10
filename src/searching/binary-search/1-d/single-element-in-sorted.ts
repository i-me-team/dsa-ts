/**
 * Problem link: https://leetcode.com/problems/single-element-in-a-sorted-array/description/
 * Idea:
 * 1. Find on which half the mid is lying.
 * 2. If mid fell on left half, then (even, odd) so discard the left half
 * 3. else (odd, even), so discard the right half.
 * 4. Factor the edge cases in the beginning to avoid complex conditional statements.
 */
export function singleNonDuplicate(nums: number[]): number {
  const len = nums.length;
  // edge cases
  if (len === 1 || nums[0] !== nums[1]) return nums[0];
  if (nums[len - 1] !== nums[len - 2]) return nums[len - 1];
  let low = 1,
    high = len - 2;
  let ans = 1e6;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
      ans = nums[mid];
      break;
      // Determining the left half
    } else if (
      (mid % 2 === 0 && nums[mid] === nums[mid + 1]) ||
      (mid % 2 === 1 && nums[mid] === nums[mid - 1])
    ) {
      low = mid + 1;
    } else {
      // We found the right half. So move towards left for the answer
      high = mid - 1;
    }
  }
  return ans;
}
