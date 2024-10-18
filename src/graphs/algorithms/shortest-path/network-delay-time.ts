// Problem link: https://leetcode.com/problems/network-delay-time/

import PriorityQueue from '../../../queues/priority-queue.ts';

export function networkDelayTime(
  times: number[][],
  n: number,
  k: number,
): number {
  const pq = new PriorityQueue<[number, number]>((a, b) => a[1] - b[1]);
  const time = new Array(n).fill(Infinity);
  const graph: [number, number][][] = Array.from({ length: n }, () => []);
  for (let [from, to, t] of times) {
    graph[from - 1].push([to - 1, t]);
  }

  pq.enqueue([k - 1, 0]);
  time[k - 1] = 0;

  while (!pq.isEmpty()) {
    const [node, t] = pq.dequeue()!;
    for (let [nbr, tt] of graph[node]) {
      const newTime = t + tt;
      if (newTime < time[nbr]) {
        time[nbr] = newTime;
        pq.enqueue([nbr, newTime]);
      }
    }
  }

  return time.some((el) => el === Infinity) ? -1 : Math.max(...time);
}
