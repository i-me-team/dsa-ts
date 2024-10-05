// Problem link: https://www.geeksforgeeks.org/problems/minimum-multiplications-to-reach-end/1

import PriorityQueue from '../../../queues/priority-queue.ts';

export function minimumMultiplications(
  arr: number[],
  start: number,
  end: number,
): number {
  const distances = new Array(100000).fill(Infinity);
  const pq = new PriorityQueue<[number, number]>((a, b) => a[0] - b[0]);
  const MOD = 1e5;
  // init phase
  distances[start] = 0;
  pq.enqueue([0, start]);

  while (!pq.isEmpty()) {
    const [steps, node] = pq.dequeue()!;

    if (node === end) break;

    arr.forEach((el) => {
      const newNode = (el * node) % MOD;
      const newStep = steps + 1;
      if (newStep < distances[newNode]) {
        distances[newNode] = newStep;
        pq.enqueue([newStep, newNode]);
      }
    });
  }

  return distances[end] === Infinity ? -1 : distances[end];
}
