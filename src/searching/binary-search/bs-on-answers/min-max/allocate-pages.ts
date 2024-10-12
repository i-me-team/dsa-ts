/**
 * Problem link: https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1
 */

export function findPages(arr: number[], n: number, m: number): number {
  let low = Math.max(...arr);
  let high = arr.reduce((a, c) => a + c, 0);
  // edge case
  if (n < m) return -1;

  const canAllocateBooks = (pages: number) => {
    let student = 1,
      pagesStudent = 0;
    for (let el of arr) {
      if (pagesStudent + el <= pages) {
        pagesStudent += el;
      } else {
        student++;
        pagesStudent = el;
      }
    }
    return student <= m;
  };

  let ans = 0;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (canAllocateBooks(mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
