// Problem link: https://leetcode.com/problems/min-stack/

type Pair = [number, number];

export default class MinStack {
  private st: Pair[];

  constructor() {
    this.st = [];
  }

  get size(): number {
    return this.st.length;
  }

  private _top(): Pair {
    return this.st[this.size - 1];
  }

  push(val: number): void {
    if (this.size === 0) {
      this.st.push([val, val]);
      return;
    }
    const prevMin = this._top()[1];
    this.st.push([val, Math.min(val, prevMin)]);
  }

  pop(): void {
    this.st.pop();
  }

  top(): number {
    return this._top()[0];
  }

  getMin(): number {
    return this._top()[1];
  }
}
