interface Edge {
  to: number;
  weight?: number;
}

export function buildGraph(
  n: number,
  edges: number[][],
  directed: boolean = true,
): Edge[][] {
  const graph: Edge[][] = Array.from({ length: n }, () => []);

  for (const edge of edges) {
    const [from, to, weight] = edge;

    if (weight !== undefined) {
      graph[from].push({ to, weight });
      if (!directed) graph[to].push({ to: from, weight });
    } else {
      graph[from].push({ to });
      if (!directed) graph[to].push({ to: from });
    }
  }

  return graph;
}
