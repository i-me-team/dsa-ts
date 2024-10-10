/**
 * Problem link: https://leetcode.com/problems/find-peak-element/
 * Idea:
 * 1. Check for the edge cases.
 * 2. If element at mid < element at mid - 1, we fell on left side of the peak
 * 3. else we fell on right side of the peak(Also, in case of multiple peak, we fell at trough. Important to factor in)
 */
export function findPeakElement(nums: number[]): number {
  const len = nums.length;
  // edge case
  if (len === 1 || nums[0] > nums[1]) return 0;
  if (nums[len - 1] > nums[len - 2]) return len - 1;
  let low = 1,
    high = len - 2;
  let ans = -1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      ans = mid;
      break;
    } else if (nums[mid] < nums[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}
