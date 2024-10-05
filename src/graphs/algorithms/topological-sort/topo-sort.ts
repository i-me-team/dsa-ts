/**
 * Definition: Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u-v, vertex u comes before v in the ordering.
 *
 * Time: O(V + E)
 * Space: O(n)
 */

import Queue from '../../../queues/queue.ts';
import type Graph from '../../representation/adjacency-list.ts';

/**
 * 1. Create a stack for storing the vertex ordering.
 * 2. Run a loop from 0 to V - 1.
 * 3. If the vertex is not marked as visited, apply DFS.
 * 4. Once the DFS ends it shows that all the vertices which are already coming in the ordering before will be added. It means that the last/terminal node will only be added to stack(result) once all the other vertices which lead to that terminal node are added.
 * 5. Return the result. In javascript we use array for demonstrating stack so return the reversed result.
 *
 */

export function topologicalSortDFS(graph: Graph<number>): number[] {
  const visited = new Set<number>();
  const stack: number[] = [];
  const N = graph.verticesList().length;

  const dfs = (vtx: number): void => {
    // main case
    visited.add(vtx);
    for (let neighbor of graph.getNeighbors(vtx)) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
    stack.push(vtx);
  };

  for (let i = 0; i < N; i++) {
    if (!visited.has(i)) {
      dfs(i);
    }
  }
  return stack.reverse();
}

/**
 * Kahn's Algorithm:
 * 1. Maintain and calculate the in-degree array of all the nodes.
 * 2. Use a queue data structure to store all the terminal nodes(nodes with in-degree 0)
 * 3. Since the graph is a DAG, there exists at least one node with in-degree 0.
 * 4. Iterate until queue is empty and reduce the in-degree of other vertices to zero before pushing it into result
 * 5. Return the result.
 */
export function topologicalSortBFS(graph: Graph<number>): number[] {
  const V = graph.verticesList().length;
  const result: number[] = [];
  const q = new Queue<number>();
  const inDegrees: number[] = new Array(V).fill(0);
  for (let i = 0; i < V; i++) {
    for (let neighbor of graph.getNeighbors(i)) {
      inDegrees[neighbor]++; // Increment the neighbors' in-degree since i is incident upon them
    }
  }
  // Enqueue all terminal nodes
  inDegrees.forEach((el, idx) => el === 0 && q.enqueue(idx));

  while (!q.isEmpty()) {
    const vtx = q.dequeue();
    result.push(vtx);
    for (let neighbor of graph.getNeighbors(vtx)) {
      inDegrees[neighbor]--; // Since vtx is added to result the in-degree due to that can be safely decremented
      if (inDegrees[neighbor] === 0) {
        q.enqueue(neighbor);
      }
    }
  }

  return result;
}
