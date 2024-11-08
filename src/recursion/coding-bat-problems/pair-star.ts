/**
 * Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".
 *
 * pairStar("hello") → "hel*lo"
 * pairStar("xxyy") → "x*xy*y"
 * pairStar("aaaa") → "a*a*a*a"
 */

export default function pairStar(str: string): string {
  if (str === '' || str.length === 1) {
    return str;
  }

  const hyp = pairStar(str.substring(1));
  if (str.charAt(0) === str.charAt(1)) {
    return `${str.charAt(0)}*` + hyp;
  } else {
    return str.charAt(0) + hyp;
  }
}
