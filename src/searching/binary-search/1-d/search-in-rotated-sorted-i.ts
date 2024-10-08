// Problem Link: https://leetcode.com/problems/search-in-rotated-sorted-array/
/**
 * Tricky and good question:
 * 1. Identify the sorted half.
 * 2. Check whether the target lies within that half.
 * 2.1. If it lies in the left half; discard the right half and vice-versa.
 * 3. Return the answer.
 * Failing test cases to watch out for: [1, 3]; target: 3 and [3, 1]; target: 1
 */
export function search(nums: number[], target: number): number {
  let ans = -1;
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) {
      ans = mid;
      break;
    }
    // Identify the sorted half
    if (nums[low] <= nums[mid]) {
      // left half is sorted
      // Check whether the target lies within that half
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      //right half is sorted
      // Check whether the target lies within that half
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return ans;
}
