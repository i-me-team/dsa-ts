/**
 * We'll say that a "pair" in a string is two instances of a char separated by a char.
 * So "AxA" the A's make a pair.
 * Pair's can overlap, so "AxAxA" contains 3 pairs -- 2 for A and 1 for x.
 * Recursively compute the number of pairs in the given string.
 *
 * countPairs("axa") → 1
 * countPairs("axax") → 2
 * countPairs("axbx") → 1
 */

export default function countPairs(str: string): number {
  // base case
  if (str.length <= 2) {
    return 0;
  }
  const ros = str.substring(1);
  return str.charAt(0) === str.charAt(2)
    ? 1 + countPairs(ros)
    : countPairs(ros);
}
