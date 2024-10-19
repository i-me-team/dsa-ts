// Problem link: https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1
export function longestKSubstr(s: string, k: number): number {
  const len = s.length;
  let i = 0,
    j = 0,
    ans = -Infinity;
  // Stores char as key and latest index as value
  const map = new Map<string, number>();
  while (j < len) {
    const charAtJ = s.charAt(j);
    map.set(charAtJ, j);
    if (map.size === k) {
      ans = Math.max(ans, j - i + 1);
    } else if (map.size > k) {
      // Calculate the minimum value in map and assign it to i;
      let minVal = Infinity,
        charAtMinVal = '';
      for (let [key, val] of map) {
        if (minVal > val) {
          minVal = val;
          charAtMinVal = key;
        }
      }
      // Slide the window
      i = minVal + 1;
      // Update the computation caused by removing i
      map.delete(charAtMinVal);
    }
    // Increase the window size
    j++;
  }
  return ans === -Infinity ? -1 : ans;
}
