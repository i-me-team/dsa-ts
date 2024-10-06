/**
 * Purpose: Finds the shortest paths between all pairs of vertices in a weighted graph.
 * Type: Dynamic programming algorithm.
 * Complexity: O(V^3) time, where V is the number of vertices. O(V^2) space
 * Input: A graph represented as an adjacency matrix.
 * Output: A matrix of shortest distances between all pairs of vertices.
 * Can detect negative cycles if dist[i][i] < 0 for any i after running the algorithm.
 */

export function floydWarshall(matrix: number[][]): void {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = Infinity;
      }
      if (i === j) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === Infinity) {
        matrix[i][j] = -1;
      }
    }
  }
}
