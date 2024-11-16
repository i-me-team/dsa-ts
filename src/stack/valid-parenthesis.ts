// Problem link: https://leetcode.com/problems/valid-parentheses/

export default function isValid(s: string): boolean {
  const stack = [];
  for (let ch of s) {
    if (
      (ch === ')' && stack[stack.length - 1] === '(') ||
      (ch === '}' && stack[stack.length - 1] === '{') ||
      (ch === ']' && stack[stack.length - 1] === '[')
    ) {
      stack.pop();
    } else if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else {
      return false;
    }
  }
  return stack.length === 0;
}
