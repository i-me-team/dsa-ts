export default function postToInfix(postfix: string) {
  const stack: string[] = [];
  for (let ch of postfix) {
    if (/[A-Za-z0-9]/.test(ch)) {
      stack.push(ch);
    } else {
      const t1 = stack.pop();
      const t2 = stack.pop();
      const res = `(${t2}${ch}${t1})`;
      stack.push(res);
    }
  }
  return stack[0];
}
