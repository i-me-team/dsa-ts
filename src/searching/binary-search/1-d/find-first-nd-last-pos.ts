// Problem link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Got confused if I have to do in a single pass which is not possible in O(log n). You need to take 2 passes. Watch out this
export function searchRange(nums: number[], target: number): number[] {
  const binarySearch = (type: 'floor' | 'ceil') => {
    let low = 0,
      high = nums.length - 1;
    let ans = -1;
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      if (nums[mid] === target) {
        ans = mid;
        if (type === 'floor') {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return ans;
  };

  const floor = binarySearch('floor');
  const ceil = binarySearch('ceil');

  return [floor, ceil];
}
