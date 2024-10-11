/**
 * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 * Time complexity: O(N * log(sum(Weights) - maxWeight))
 */
export function shipWithinDays(weights: number[], days: number): number {
  let low = Math.max(...weights);
  let high = weights.reduce((a, c) => a + c, 0);
  let ans = 0;

  const canBeShipped = (capacity: number): boolean => {
    let sumWts = 0,
      daysCount = 1;
    for (let wt of weights) {
      sumWts += wt;
      if (sumWts > capacity) {
        daysCount++;
        sumWts = wt;
      }
    }
    return daysCount <= days;
  };

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (canBeShipped(mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
