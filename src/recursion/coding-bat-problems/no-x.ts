/**
 * Given a string, compute recursively a new string where all the 'x' chars have been removed.
 *
 * noX("xaxb") → "ab"
 * noX("abc") → "abc"
 * noX("xx") → ""
 */

export default function noX(str: string): string {
  // base case
  if (str === '') {
    return str;
  }
  const hyp = noX(str.substring(1));
  const firstChar = str.charAt(0);
  return firstChar === 'x' ? hyp : firstChar + hyp;
}
