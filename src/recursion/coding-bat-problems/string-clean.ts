/**
 * Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char.
 * So "yyzzza" yields "yza".
 *
 * stringClean("yyzzza") → "yza"
 * stringClean("abbbcdd") → "abcd"
 * stringClean("Hello") → "Helo"
 */

export default function stringClean(str: string): string {
  // base case
  if (str.length <= 1) {
    return str;
  }

  const hyp = stringClean(str.substring(1));
  const ch = str.charAt(0);
  if (ch === hyp.charAt(0)) {
    return hyp;
  } else {
    return ch + hyp;
  }
}
