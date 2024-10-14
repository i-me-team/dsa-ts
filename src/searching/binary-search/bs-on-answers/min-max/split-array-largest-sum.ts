// Problem link: https://leetcode.com/problems/split-array-largest-sum/description/

export function splitArray(nums: number[], k: number): number {
  let low = Math.max(...nums);
  let high = nums.reduce((a, c) => a + c, 0);
  let ans = 0;

  const canSplit = (sum: number): boolean => {
    let initSum = 0;
    let sArr = 1;
    for (let el of nums) {
      if (el + initSum <= sum) {
        initSum += el;
      } else {
        sArr++;
        initSum = el;
      }
    }
    return sArr <= k;
  };

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (canSplit(mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}
