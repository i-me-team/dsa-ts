// Problem link: https://www.naukri.com/code360/problems/longest-subarray-with-sum-k_6682399
// This approach is applicable only if array has positive numbers.

export function longestSubarrayWithSumK(a: number[], k: number): number {
  const len = a.length;
  let i = 0,
    j = 0;
  let ans = -Infinity,
    tempSum = 0;
  while (j < len) {
    // Calculation
    tempSum += a[j];
    // Condition
    if (tempSum === k) {
      ans = Math.max(ans, j - i + 1);
    } else if (tempSum > k) {
      while (tempSum > k) {
        tempSum -= a[i];
        // Slide the window
        i++;
      }
      // What if we overdo the removal
      if (tempSum === k) {
        ans = Math.max(ans, j - i + 1);
      }
    }
    // Slide the window
    j++;
  }
  return ans;
}
