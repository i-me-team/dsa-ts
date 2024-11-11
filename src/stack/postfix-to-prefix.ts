export default function postToPre(post_exp: string) {
  const stack: string[] = [];

  for (let ch of post_exp) {
    if (/[A-Za-z0-9]/.test(ch)) {
      stack.push(ch);
    } else {
      const t1 = stack.pop();
      const t2 = stack.pop();
      const res = `${ch}${t2}${t1}`;
      stack.push(res);
    }
  }
  return stack[0];
}
