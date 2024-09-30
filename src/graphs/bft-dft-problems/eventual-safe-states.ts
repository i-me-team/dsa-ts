/**
 *
 * Time: O(V + E)
 * Space: O(V)
 */
export function eventualSafeNodes(graph: number[][]): number[] {
  const N = graph.length;
  const states: ('unknown' | 'safe' | 'unsafe')[] = new Array(N).fill(
    'unknown',
  );

  const dfs = (vtx: number): boolean => {
    // base case
    if (states[vtx] !== 'unknown') {
      return states[vtx] === 'safe';
    }
    // main case
    states[vtx] = 'unsafe';
    for (let neighbor of graph[vtx]) {
      if (!dfs(neighbor)) {
        return false;
      }
    }

    states[vtx] = 'safe';
    return true;
  };

  return graph.map((_, i) => i).filter((node) => dfs(node));
}
