// Problem link: https://leetcode.com/problems/longest-substring-without-repeating-characters/

export function lengthOfLongestSubstring(s: string): number {
  const len = s.length;
  let i = 0,
    j = 0;
  const map = new Map<string, number>();
  let ans = 0;
  while (j < len) {
    const charAtJ = s.charAt(j);
    map.set(charAtJ, (map.get(charAtJ) || 0) + 1);
    const winSize = j - i + 1;
    if (map.size === winSize) {
      ans = Math.max(ans, winSize);
    } else if (map.size < winSize) {
      while (map.size < j - i + 1) {
        const charAtI = s.charAt(i);
        const temp = map.get(charAtI)!;
        temp === 1 ? map.delete(charAtI) : map.set(charAtI, temp - 1);
        i++;
      }
    }
    j++;
  }
  return ans;
}
