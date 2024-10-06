import logger from '../../utils/logger.ts';

export default class Queue<T> {
  private queue: { [key: number]: T };
  private front: number;
  private rear: number;

  constructor() {
    this.queue = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(item: T): number {
    if (item === undefined || item === null) {
      throw new Error('Nothing to enqueue');
    }
    this.queue[this.rear++] = item;
    return this.size;
  }

  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    const itemAtFront = this.queue[this.front];
    delete this.queue[this.front++];
    this.resetIndicesIfNeeded();
    return itemAtFront;
  }

  peek(): T {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.queue[this.front];
  }

  get size(): number {
    return this.rear - this.front;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  print(): void {
    logger('Queue contents:');
    if (this.isEmpty()) {
      logger('  (empty)', { color: 'red' });
    } else {
      let index = 0;
      for (let i = this.front; i < this.rear; i++) {
        logger(`  ${index}: ${this.queue[i]}`, { color: 'blue' });
        index++;
      }
    }
    logger(`Queue size: ${this.size}`);
    logger(`Front index: ${this.front}, Rear index: ${this.rear}`);
  }

  private resetIndicesIfNeeded(): void {
    if (this.front === this.rear) {
      this.front = this.rear = 0;
    }
  }
}

// Example usage
// const queue = new Queue<number>();
// queue.print();
// queue.isEmpty();
// queue.enqueue(10);
// queue.enqueue(30);
// queue.enqueue(70);
// queue.print();
// console.log('Element dequeued: ', queue.dequeue());
// console.log('Element on front: ', queue.peek());
// queue.print();
