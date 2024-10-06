// Problem link: https://www.geeksforgeeks.org/problems/alien-dictionary/1

import Queue from '../../../queues/queue.ts';

function topologicalSort(V: number, graph: number[][]): number[] {
  const inDegrees = new Array(V).fill(0);
  const queue = new Queue<number>();
  const result: number[] = [];

  // Calculate in-degrees
  graph.forEach((neighbors) => neighbors.forEach((nbr) => inDegrees[nbr]++));

  // Enqueue vertices with 0 in-degree
  inDegrees.forEach((degree, idx) => degree === 0 && queue.enqueue(idx));

  while (!queue.isEmpty()) {
    const vertex = queue.dequeue()!;
    result.push(vertex);
    graph[vertex].forEach((nbr) => {
      if (--inDegrees[nbr] === 0) {
        queue.enqueue(nbr);
      }
    });
  }

  return result;
}

export function findOrder(dict: string[], n: number, k: number): string {
  const graph: number[][] = Array.from({ length: k }, () => []);
  const aCode = 'a'.charCodeAt(0);

  // Build the graph
  for (let i = 0; i < n - 1; i++) {
    const [s1, s2] = [dict[i], dict[i + 1]];
    const len = Math.min(s1.length, s2.length);
    for (let j = 0; j < len; j++) {
      if (s1[j] !== s2[j]) {
        graph[s1.charCodeAt(j) - aCode].push(s2.charCodeAt(j) - aCode);
        break;
      }
    }
  }

  // Perform topological sort and convert result to string
  return topologicalSort(k, graph)
    .map((code) => String.fromCharCode(code + aCode))
    .join('');
}
