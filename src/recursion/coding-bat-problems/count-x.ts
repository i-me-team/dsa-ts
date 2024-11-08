/**
 * Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.
 *
 * countX("xxhixx") → 4
 * countX("xhixhix") → 3
 * countX("hi") → 0
 */

export default function countX(str: string): number {
  // base case
  if (str === '') {
    return 0;
  }
  const ch = str.charAt(0);
  str = str.substring(1);
  const hyp = countX(str);
  return ch === 'x' ? hyp + 1 : hyp;
}
