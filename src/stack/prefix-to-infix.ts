export default function preToInfix(pre_exp: string) {
  const len = pre_exp.length;
  const stack: string[] = [];
  for (let i = len - 1; i >= 0; i--) {
    const ch = pre_exp.charAt(i);
    if (/[A-Za-z0-9]/.test(ch)) {
      stack.push(ch);
    } else {
      const t1 = stack.pop();
      const t2 = stack.pop();
      const res = `(${t1}${ch}${t2})`;
      stack.push(res);
    }
  }
  return stack[0];
}
