class Node<T> {
  value: T;
  prev: Node<T> | null;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export default class DoublyLinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add element to start of list
  // Time Complexity: O(1)
  addFirst(value: T): void {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  // Add element to end of list
  // Time Complexity: O(1)
  addLast(value: T): void {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Insert at specific index
  // Time Complexity: O(n)
  insertAt(index: number, value: T): boolean {
    if (index < 0 || index > this.size) return false;

    if (index === 0) {
      this.addFirst(value);
      return true;
    }

    if (index === this.size) {
      this.addLast(value);
      return true;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }

    const newNode = new Node(value);
    newNode.prev = current!.prev;
    newNode.next = current;
    current!.prev!.next = newNode;
    current!.prev = newNode;
    this.size++;

    return true;
  }

  // Remove from start
  // Time Complexity: O(1)
  removeFirst(): T | undefined {
    if (!this.head) return undefined;

    const value = this.head.value;
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    this.size--;
    return value;
  }

  // Remove from end
  // Time Complexity: O(1)
  removeLast(): T | undefined {
    if (!this.tail) return undefined;

    const value = this.tail.value;
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    this.size--;
    return value;
  }

  // Remove at specific index
  // Time Complexity: O(n)
  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this.size) return undefined;

    if (index === 0) return this.removeFirst();
    if (index === this.size - 1) return this.removeLast();

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }

    current!.prev!.next = current!.next;
    current!.next!.prev = current!.prev;
    this.size--;

    return current!.value;
  }

  // Get element at index
  // Time Complexity: O(n)
  get(index: number): T | undefined {
    if (index < 0 || index >= this.size) return undefined;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current!.value;
  }

  // Update element at index
  // Time Complexity: O(n)
  set(index: number, value: T): boolean {
    if (index < 0 || index >= this.size) return false;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    current!.value = value;
    return true;
  }

  // Find index of element
  // Time Complexity: O(n)
  indexOf(value: T): number {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  // Check if list contains element
  // Time Complexity: O(n)
  contains(value: T): boolean {
    return this.indexOf(value) !== -1;
  }

  // Get first element
  // Time Complexity: O(1)
  getFirst(): T | undefined {
    return this.head?.value;
  }

  // Get last element
  // Time Complexity: O(1)
  getLast(): T | undefined {
    return this.tail?.value;
  }

  // Check if list is empty
  // Time Complexity: O(1)
  isEmpty(): boolean {
    return this.size === 0;
  }

  // Get size of list
  // Time Complexity: O(1)
  getSize(): number {
    return this.size;
  }

  // Clear the list
  // Time Complexity: O(1)
  clear(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Convert list to array
  // Time Complexity: O(n)
  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}
