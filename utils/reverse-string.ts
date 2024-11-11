export default function reverseString(
  s: string,
  isNormal: boolean = true,
): string {
  let reversed = '';
  const len = s.length;
  for (let i = len - 1; i >= 0; i--) {
    const ch = s.charAt(i);
    if (!isNormal && ch === '(') {
      reversed += ')';
    } else if (!isNormal && ch === ')') {
      reversed += '(';
    } else {
      reversed += ch;
    }
  }
  return reversed;
}
