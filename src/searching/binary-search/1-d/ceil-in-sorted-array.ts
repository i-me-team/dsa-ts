// Problem link: https://www.naukri.com/code360/problems/implement-upper-bound_8165383
// Notice the problem is strict upper bound and the array can have duplicates.

export function strictUpperBound(arr: number[], x: number, n: number): number {
  let low = 0,
    high = n - 1;
  let ans = n; // Notice this
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
