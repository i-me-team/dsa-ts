export type OperatorPriority = 0 | 1 | 2 | 3;
export type Operator = '^' | '*' | '/' | '+' | '-';

export default function infixToPostfix(s: string): string {
  const len = s.length;
  const st = [];
  const pr: Record<Operator, OperatorPriority> = {
    '^': 3,
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1,
  };

  let i = 0,
    ans = '';
  while (i < len) {
    const ch = s.charAt(i);
    if (/[A-Za-z0-9]/.test(ch)) {
      ans += ch;
    } else if (ch === '(') {
      st.push(ch);
    } else if (ch === ')') {
      while (st[st.length - 1] !== '(') {
        ans += st.pop();
      }
      st.pop(); // Remove (
    } else {
      // Operator
      while (
        st.length > 0 &&
        st[st.length - 1] !== '(' &&
        pr[st[st.length - 1] as Operator] >= pr[ch as Operator]
      ) {
        ans += st.pop();
      }
      st.push(ch);
    }
    i++;
  }

  ans += st.reverse().join('');
  return ans;
}
