// Problem link: https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1

export function count(arr: number[], n: number, x: number) {
  const bs = (type: 'first' | 'last') => {
    let low = 0,
      high = n - 1;
    let ans = -1;
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      if (arr[mid] === x) {
        ans = mid;
        if (type === 'first') {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else if (arr[mid] < x) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return ans;
  };

  const first = bs('first');
  const last = bs('last');

  if (first === -1) {
    // or last === -1
    return 0;
  }
  return last - first + 1;
}
