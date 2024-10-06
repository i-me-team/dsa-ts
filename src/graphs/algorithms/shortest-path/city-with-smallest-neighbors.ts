// Problem link: https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/

export function findTheCity(
  n: number,
  edges: number[][],
  distanceThreshold: number,
): number {
  const adMatrix: number[][] = Array.from({ length: n }, () =>
    new Array(n).fill(Infinity),
  );
  for (let [u, v, wt] of edges) {
    adMatrix[u][v] = wt;
    adMatrix[v][u] = wt;
  }
  for (let i = 0; i < n; i++) {
    adMatrix[i][i] = 0;
  }

  for (let via = 0; via < n; via++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        adMatrix[i][j] = Math.min(
          adMatrix[i][j],
          adMatrix[i][via] + adMatrix[via][j],
        );
      }
    }
  }

  let result = -1;
  let minReachableCities = n + 1; // Initialize with a value greater than possible

  for (let i = 0; i < n; i++) {
    const reachableCities = adMatrix[i].reduce(
      (count, distance) => (distance <= distanceThreshold ? count + 1 : count),
      0,
    );

    if (reachableCities <= minReachableCities) {
      minReachableCities = reachableCities;
      result = i;
    }
  }

  return result;
}
