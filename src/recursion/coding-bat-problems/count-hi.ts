/**
 * Given a string, compute recursively (no loops) the number of times lowercase "hi" appears in the string.
 *
 * countHi("xxhixx") → 1
 * countHi("xhixhix") → 2
 * countHi("hi") → 1
 */

export default function countHi(str: string): number {
  // base case
  if (str === '' || str.length === 1) {
    return 0;
  }
  const len2Str = str.substring(0, 2);
  const rest = str.substring(2);
  return len2Str === 'hi' ? 1 + countHi(rest) : countHi(str.substring(1));
}
