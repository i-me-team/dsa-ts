// Problem link: https://leetcode.com/problems/minimum-window-substring/description/

export function minWindow(s: string, t: string): string {
  const sLen = s.length;
  const tLen = t.length;
  let i = 0,
    j = 0;
  let count = 0,
    minLength = Infinity,
    sIdx = -1;

  const map = new Map<string, number>();
  for (let i of t) {
    map.set(i, (map.get(i) || 0) + 1);
  }

  while (j < sLen) {
    const charAtJ = s.charAt(j);
    if (map.get(charAtJ)! > 0) {
      count++;
    }
    map.set(charAtJ, (map.get(charAtJ) || 0) - 1);

    while (count === tLen) {
      if (j - i + 1 < minLength) {
        minLength = j - i + 1;
        sIdx = i;
      }
      const charAtI = s.charAt(i);
      const getFreqI = map.get(charAtI)!;
      map.set(charAtI, getFreqI + 1);
      if (getFreqI + 1 > 0) {
        count--;
      }
      i++;
    }
    j++;
  }

  return sIdx === -1 ? '' : s.substring(sIdx, sIdx + minLength);
}
