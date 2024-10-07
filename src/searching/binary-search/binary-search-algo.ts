/**
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * Can be applied mainly on sorted arrays(1D/2D) or sorted things(BS on answers)
 */

// Iterative Binary Search

export function binarySearchITR(arr: number[], k: number): number {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2); // To avoid overflow situation literally it is (high + low) / 2
    if (arr[mid] === k) {
      return mid;
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

export function binarySearchRec(arr: number[], k: number): number {
  const low = 0,
    high = arr.length - 1;
  const recursiveBS = (low: number, high: number): number => {
    // base case
    if (low > high) {
      return -1;
    }
    const mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === k) {
      return mid;
    } else if (arr[mid] < k) {
      return recursiveBS(mid + 1, high);
    } else {
      return recursiveBS(low, mid - 1);
    }
  };

  return recursiveBS(low, high);
}
