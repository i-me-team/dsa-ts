// Problem link: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
/**
 * Similar to search-in-rotated-sorted-i. But here the problem is what if low = mid = high; then we won't know which half to consider, therefore we will trim the search space.
 * Worst Case time complexity when all the elements are identical and we need to find the some element which is non-existent in that array. O(n/2) ~= O(n). Average case will still be O(log n)
 */
export function search(nums: number[], target: number): boolean {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) {
      return true;
    }
    if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
      // Do not know which half to consider, so trim the search space.
      low += 1;
      high -= 1;
    } else if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return false;
}
