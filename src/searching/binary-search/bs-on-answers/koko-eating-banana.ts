/**
 * Problem link: https://leetcode.com/problems/koko-eating-bananas/
 * Time complexity: O(N log M); N = length of piles, M = Answer length
 */
export function minEatingSpeed(piles: number[], h: number): number {
  const canEatInTime = (eatingSpeed: number): boolean => {
    let tempHr = 0;
    for (let pile of piles) {
      const eatTime = Math.ceil(pile / eatingSpeed);
      tempHr += eatTime === 0 ? 1 : eatTime;
    }
    return tempHr <= h;
  };

  let low = 1,
    high = Math.max(...piles);
  let ans = 0;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (canEatInTime(mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
