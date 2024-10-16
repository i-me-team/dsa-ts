// Problem link: https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1
export function maximumSumSubarray(
  K: number,
  Arr: number[],
  N: number,
): number {
  let i = 0,
    j = 0;
  let maxSum = -Infinity,
    tempSum = 0;
  while (j < N) {
    const winSize = j - i + 1;
    tempSum += Arr[j];
    if (winSize === K) {
      maxSum = Math.max(maxSum, tempSum);
      tempSum -= Arr[i];
      i++;
    }
    j++;
  }
  return maxSum;
}
