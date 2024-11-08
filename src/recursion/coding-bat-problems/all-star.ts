/**
 * Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".
 *
 * allStar("hello") → "h*e*l*l*o"
 * allStar("abc") → "a*b*c"
 * allStar("ab") → "a*b"
 */

export default function allStar(str: string): string {
  if (str === '' || str.length === 1) {
    return str;
  }
  const ch = `${str.charAt(0)}*`;
  const ros = str.substring(1);
  return ch + allStar(ros);
}
