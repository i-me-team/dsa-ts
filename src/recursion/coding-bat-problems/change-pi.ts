/**
 * Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".
 *
 * changePi("xpix") → "x3.14x"
 * changePi("pipi") → "3.143.14"
 * changePi("pip") → "3.14p"
 */

export default function changePi(str: string): string {
  // base case
  if (str === '' || str.length === 1) {
    return str;
  }
  if (str.startsWith('pi')) {
    const ros = str.substring(2);
    return '3.14' + changePi(ros);
  } else {
    const ros = str.substring(1);
    return str.charAt(0) + changePi(ros);
  }
}
