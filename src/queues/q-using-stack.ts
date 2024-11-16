export default class MyQueue {
  st: number[];

  constructor() {
    this.st = [];
  }

  push(x: number): void {
    this.st.push(x);
  }

  pop(): number {
    return this.st.shift()!;
  }

  peek(): number {
    return this.st[0];
  }

  empty(): boolean {
    return this.st.length === 0;
  }
}
