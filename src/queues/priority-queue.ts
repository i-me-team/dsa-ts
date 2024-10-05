import MinHeap from '../heaps/min-heap.ts';

export default class PriorityQueue<T> {
  private heap: MinHeap<T>;

  constructor(compareFunction: (a: T, b: T) => number) {
    this.heap = new MinHeap<T>(compareFunction);
  }

  get size(): number {
    return this.heap.size();
  }

  public enqueue(value: T): void {
    this.heap.insert(value);
  }

  public dequeue(): T | undefined {
    return this.heap.extractMin();
  }

  public peek(): T | undefined {
    return this.heap.peek();
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }
}
