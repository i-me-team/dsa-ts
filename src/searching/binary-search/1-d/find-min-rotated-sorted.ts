// Problem link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
/**
 * 1. If the portion of the array or the complete array is sorted then the minimum is nums[low] or ans(min).
 * 2. Else Identify the sorted half
 * 3. Once the sorted half is identified, then we need to store the answer and move towards unsorted(V.VIP) half.
 * 3.1. Why unsorted half?
 * -> because the pivot will always lie there and pivot element would be smallest
 */
export function findMin(nums: number[]): number {
  let low = 0,
    high = nums.length - 1;
  let min = Infinity;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[low] <= nums[high]) {
      min = Math.min(min, nums[low]);
      break;
    }
    // Identify the sorted half
    if (nums[low] <= nums[mid]) {
      min = Math.min(min, nums[low]);
      low = mid + 1;
    } else {
      min = Math.min(min, nums[mid]);
      high = mid - 1;
    }
  }
  return min;
}
