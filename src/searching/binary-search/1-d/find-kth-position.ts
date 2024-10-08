// https://www.geeksforgeeks.org/problems/rotation4723/1

// Same as finding min in rotated sorted array. Just you need to return the index of minimum element.
export function findKRotation(arr: number[]): number {
  let low = 0,
    high = arr.length - 1;
  let ans = Infinity;
  let ansIdx = -1;
  while (low <= high) {
    if (arr[low] <= arr[high]) {
      if (arr[low] < ans) {
        ans = arr[low];
        ansIdx = low;
      }
    }
    const mid = low + Math.floor((high - low) / 2);
    if (arr[low] <= arr[mid]) {
      if (arr[low] < ans) {
        ans = arr[low];
        ansIdx = low;
      }
      low = mid + 1;
    } else {
      if (arr[mid] < ans) {
        ans = arr[mid];
        ansIdx = mid;
      }
      high = mid - 1;
    }
  }
  return ansIdx;
}
