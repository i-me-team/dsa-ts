// Problem link: https://www.geeksforgeeks.org/problems/square-root/0

export function floorSqrt(n: number): number {
  let low = 1,
    high = n;
  let ans = 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    let res = mid ** 2;
    // below 2 conditions can be combined also i.e. res <= n -> ans = mid; low = mid + 1
    if (res === n) {
      ans = mid;
      break;
    } else if (res < n) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}
