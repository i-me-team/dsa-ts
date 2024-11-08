/**
 * Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to the end of the string.
 *
 * endX("xxre") → "rexx"
 * endX("xxhixx") → "hixxxx"
 * endX("xhixhix") → "hihixxx"
 */

export default function endX(str: string): string {
  // base case
  if (str === '') {
    return '';
  }
  const ch = str.charAt(0);
  const hyp = endX(str.substring(1));
  return ch === 'x' ? hyp + ch : ch + hyp;
}
