import DoublyLinkedList from '../linked-list/doubly-linked-list.ts';

export default class Deque<T> {
  private list: DoublyLinkedList<T>;

  constructor() {
    this.list = new DoublyLinkedList<T>();
  }

  // Add to front
  // Time Complexity: O(1)
  pushFront(value: T): void {
    this.list.addFirst(value);
  }

  // Add to back
  // Time Complexity: O(1)
  pushBack(value: T): void {
    this.list.addLast(value);
  }

  // Remove from front
  // Time Complexity: O(1)
  popFront(): T | undefined {
    return this.list.removeFirst();
  }

  // Remove from back
  // Time Complexity: O(1)
  popBack(): T | undefined {
    return this.list.removeLast();
  }

  // Get front element
  // Time Complexity: O(1)
  peekFront(): T | undefined {
    return this.list.getFirst();
  }

  // Get back element
  // Time Complexity: O(1)
  peekBack(): T | undefined {
    return this.list.getLast();
  }

  // Check if empty
  // Time Complexity: O(1)
  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  // Get size
  // Time Complexity: O(1)
  getSize(): number {
    return this.list.getSize();
  }

  // Clear deque
  // Time Complexity: O(1)
  clear(): void {
    this.list.clear();
  }

  // Convert to array
  // Time Complexity: O(n)
  toArray(): T[] {
    return this.list.toArray();
  }
}
