// https://leetcode.com/problems/number-of-provinces/description/
// Connected component problem in a matrix
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
export function findCircleNum(isConnected: number[][]): number {
  /*
   * 1. Run a loop for all the cities
   * 2. if the city is not visited:
   *   2.1. Apply DFS starting from the city.
   *   2.2. increment number of provinces
   * 3. Return number of provinces
   ** Time complexity: O(N)[loop] + O(2E+ V)=~ O(N) for DFS; N = #f vertices
   ** Space complexity: O(N)[maintaining a visited Set] + O(N)[worst case stack space]
   */
  let countOfProvinces = 0;
  const visited = new Set();
  const getNeighborsOf = (city: number) =>
    isConnected[city].map((n, i) => (n !== 0 && i) as number).filter(Boolean);

  const dfs = (city: number) => {
    // base case
    if (visited.has(city)) return;
    // main case
    visited.add(city);
    for (let neighbor of getNeighborsOf(city)) {
      dfs(neighbor);
    }
  };

  const totalCities = isConnected.length;
  // TC: O(n) for loop
  for (let city = 0; city < totalCities; city++) {
    if (!visited.has(city)) {
      countOfProvinces++;
      dfs(city);
    }
  }
  return countOfProvinces;
}
