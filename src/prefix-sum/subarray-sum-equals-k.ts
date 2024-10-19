// Problem link: https://leetcode.com/problems/subarray-sum-equals-k/

export function subarraySum(nums: number[], k: number): number {
  const map = new Map<number, number>();
  // cumulative sum(as key) -> frequency of those sums(as value)
  map.set(0, 1);
  const len = nums.length;
  let sum = 0,
    ans = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      ans += map.get(sum - k)!;
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return ans;
}
