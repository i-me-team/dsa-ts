// Problem link: https://leetcode.com/problems/fruit-into-baskets/
export function totalFruit(fruits: number[]): number {
  const len = fruits.length;
  const map = new Map<number, number>();
  let i = 0,
    j = 0;
  let ans = -Infinity;
  while (j < len) {
    map.set(fruits[j], j);
    if (map.size === 2) {
      ans = Math.max(ans, j - i + 1);
    } else if (map.size > 2) {
      let minIndex = Infinity,
        keyOfMin = -1;
      for (let [key, val] of map) {
        if (val < minIndex) {
          minIndex = val;
          keyOfMin = key;
        }
      }
      map.delete(keyOfMin);
      i = minIndex + 1;
    }
    j++;
  }

  return ans === -Infinity ? fruits.length : ans;
}
