/**
 * Count recursively the total number of "abc" and "aba" substrings that appear in the given string.
 *
 * countAbc("abc") → 1
 * countAbc("abcxxabc") → 2
 * countAbc("abaxxaba") → 2
 */

export default function countAbc(str: string): number {
  // base case
  if (str.length <= 2) {
    return 0;
  }
  const ros = str.substring(1);
  if (str.startsWith('abc') || str.startsWith('aba')) {
    return 1 + countAbc(ros);
  } else {
    return countAbc(ros);
  }
}
