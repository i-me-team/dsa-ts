// Problem link: https://www.geeksforgeeks.org/problems/count-occurences-of-anagrams5839/1
export function search(pat: string, txt: string): number {
  const patLen = pat.length;
  const txtLen = txt.length;
  let i = 0,
    j = 0,
    ans = 0;
  const map = new Map();
  for (let ch of pat) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  let count = map.size;
  while (j < txtLen) {
    const charAtJ = txt.charAt(j);
    // Calculation
    if (map.has(charAtJ)) {
      const getVal = map.get(charAtJ);
      map.set(charAtJ, getVal - 1);
      if (getVal - 1 === 0) {
        count--;
      }
    }
    // Window size check
    if (j - i + 1 === patLen) {
      if (count === 0) {
        ans++;
      }
      const charAtI = txt.charAt(i);
      const getValAtI = map.get(charAtI);
      // Undo the result
      if (getValAtI === 0) {
        count++;
      }
      map.set(charAtI, getValAtI + 1);
      // Slide the window
      i++;
    }
    // Slide the window
    j++;
  }
  return ans;
}
