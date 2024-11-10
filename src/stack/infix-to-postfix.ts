type OperatorPriority = 0 | 1 | 2 | 3;
type Operator = '^' | '*' | '/' | '+' | '-' | '(';

export default function infixToPostfix(s: string): string {
  let ans = '',
    i = 0;
  const st = [];
  const len = s.length;

  const checkPriority = (ch1: string, ch2: string): boolean => {
    const priorityDict: Record<Operator, OperatorPriority> = {
      '^': 3,
      '*': 2,
      '/': 2,
      '+': 1,
      '-': 1,
      '(': 0,
    };
    return priorityDict[ch1 as Operator] >= priorityDict[ch2 as Operator];
  };

  while (i < len) {
    const ch = s.charAt(i);

    // Handle operands
    if (/[A-Za-z0-9]/.test(ch)) {
      ans += ch;
    }
    // Handle opening parenthesis
    else if (ch === '(') {
      st.push(ch);
    }
    // Handle closing parenthesis
    else if (ch === ')') {
      while (st[st.length - 1] !== '(') {
        ans += st.pop();
      }
      st.pop(); // Remove '('
    }
    // Handle operators
    else {
      while (
        st.length > 0 &&
        st[st.length - 1] !== '(' &&
        checkPriority(st[st.length - 1], ch)
      ) {
        ans += st.pop();
      }
      st.push(ch);
    }
    i++;
  }

  ans += st.join('');
  return ans;
}
