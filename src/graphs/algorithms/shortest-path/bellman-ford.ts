/**
 * Time complexity: O(V.E)
 * Space complexity: O(V)
 * Bellman-ford algorithm is only applicable for Directed Graph. If the graph is undirected convert it to directed graph and then apply it.
 * Bellman-ford algorithm is used for single source shortest path.
 * It is different from Dijkstra's algo in the cases when the graph contains a negative weights or there exists a negative cycle. For these scenarios Dijkstra's algo fails.
 * Why V - 1 iterations?
 * -> If the shortest path between 𝑠 and 𝑡 has 𝑘 edges, Bellman Ford will find it after at most 𝑘   iterations. Since a shortest path cannot have more than 𝑉−1 edges, it takes at most that many iterations.
    Consider a line graph with 𝑛 nodes, with node 𝑖 connected to node 𝑖+1. You run Bellman Ford from node 1 and process the edges further away from 1 first. Then it will take exactly 𝑛−1 steps.
 * How to check for negative cycles using Bellman Ford?
 * -> After completing n - 1 iterations, run one more iteration. If any of the edges gets relaxed(distances array value changed), it concludes the negative cycle exist since without negative cycle it is not possible for the algorithm to further relax any edge.
 */

type Triplet = [number, number, number];

export function bellmanFord(
  edges: Triplet[],
  V: number,
  src: number,
): number[] {
  const distances: number[] = new Array(V).fill(Infinity);

  // Init phase
  distances[src] = 0;

  for (let i = 0; i < V - 1; i++) {
    for (let [from, to, wt] of edges) {
      const newDist = distances[from] + wt;
      if (newDist < distances[to]) {
        distances[to] = newDist;
      }
    }
  }

  // For checking negative cycle
  for (let [from, to, wt] of edges) {
    const newDist = distances[from] + wt;
    if (newDist < distances[to]) {
      return [-1];
    }
  }

  return distances;
}
