import MinHeap from '../heaps/MinHeap.ts';

export default class PriorityQueue<T> {
  private heap: MinHeap<{ priority: number; value: T }>;

  constructor() {
    this.heap = new MinHeap((a, b) => a.priority - b.priority);
  }

  get size(): number {
    return this.heap.size();
  }

  public enqueue(value: T, priority: number): void {
    this.heap.insert({ priority, value });
  }

  public dequeue(): T | undefined {
    const min = this.heap.extractMin();
    return min ? min.value : undefined;
  }

  public peek(): T | undefined {
    const min = this.heap.peek();
    return min ? min.value : undefined;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }
}
