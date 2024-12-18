/**
 * Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.
 *
 * changeXY("codex") → "codey"
 * changeXY("xxhixx") → "yyhiyy"
 * changeXY("xhixhix") → "yhiyhiy"
 */

export default function changeXY(str: string): string {
  // base case
  if (str === '') {
    return '';
  }
  const ch = str.charAt(0);
  const rest = str.substring(1);
  return ch === 'x' ? 'y' + changeXY(rest) : ch + changeXY(rest);
}
