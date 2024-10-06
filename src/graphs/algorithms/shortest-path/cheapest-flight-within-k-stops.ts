import Queue from '../../../queues/queue.ts';

// The major learning while doing this problem is we need to identify which variable we have to consider for priority.

type Pair = [number, number];

export function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number,
): number {
  const costs: number[] = new Array(n).fill(Infinity);
  const graph: Pair[][] = Array.from({ length: n }, () => []);
  flights.forEach(([from, to, cost]) => graph[from].push([to, cost]));

  const q = new Queue<[number, number, number]>();

  // init phase
  costs[src] = 0;
  // src, cost, stops
  q.enqueue([src, 0, 0]);

  while (!q.isEmpty()) {
    const [node, cost, stops] = q.dequeue();
    if (stops > k) continue;
    for (let [to, cst] of graph[node]) {
      const newCost = cost + cst;
      if (newCost < costs[to] && stops <= k) {
        costs[to] = newCost;
        q.enqueue([to, newCost, stops + 1]);
      }
    }
  }

  return costs[dst] === Infinity ? -1 : costs[dst];
}
