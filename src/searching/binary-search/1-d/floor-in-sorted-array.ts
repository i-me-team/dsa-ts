// Problem link: https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1
export function findFloor(arr: number[], _n: number, x: number) {
  let low = 0,
    high = arr.length - 1;
  let res = -1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === x) {
      res = mid;
      break;
    } else if (arr[mid] < x) {
      res = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return res;
}
