/**
 * Problem link: https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/
 * Time complexity: (N * log(Max - BloomDay))
 *
 *  */
export function minDays(bloomDay: number[], m: number, k: number): number {
  // edge case where it is not possible to make bouquets
  const len = bloomDay.length;

  if (m * k > len) {
    return -1;
  }

  const canMakeBouquets = (minDays: number): boolean => {
    let count = 0;
    let numBouquets = 0;
    for (let fl of bloomDay) {
      if (fl <= minDays) {
        count++;
      } else {
        numBouquets += Math.floor(count / k);
        if (numBouquets >= m) {
          return true;
        }
        count = 0;
      }
    }
    // To check if last element makes the total count
    if (count !== 0) {
      numBouquets += Math.floor(count / k);
    }
    return numBouquets >= m;
  };

  let [low, high] = bloomDay.reduce(
    ([min, max], n) => [Math.min(min, n), Math.max(max, n)],
    [Infinity, -Infinity],
  );
  let ans = 0;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (canMakeBouquets(mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
