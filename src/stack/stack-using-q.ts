import Queue from '../queues/queue.ts';

export class MyStack<T> {
  private q: Queue<T>;

  constructor() {
    this.q = new Queue<T>();
  }

  push(x: T): void {
    this.q.enqueue(x);
    for (let i = 1; i < this.q.size; i++) {
      this.q.enqueue(this.q.peek());
      this.q.dequeue();
    }
  }

  pop(): T {
    return this.q.dequeue();
  }

  top(): T {
    return this.q.peek();
  }

  empty(): boolean {
    return this.q.size === 0;
  }
}
