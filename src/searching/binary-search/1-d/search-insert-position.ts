// https://leetcode.com/problems/search-insert-position/submissions/1414556253/
export function searchInsert(nums: number[], target: number): number {
  let low = 0,
    high = nums.length - 1;
  let res = 0; // init with 0 if it is less than 0th index element
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) {
      res = mid;
      break;
    } else if (nums[mid] < target) {
      res = mid + 1;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return res;
}
