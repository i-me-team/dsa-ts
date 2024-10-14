/**
 * Problem link: https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1
 * Similar to Find median of 2 sorted arrays.
 */
export function kthElement(k: number, arr1: number[], arr2: number[]): number {
  // Ensure nums1 is the smaller array for optimization
  if (arr1.length > arr2.length) {
    [arr1, arr2] = [arr2, arr1];
  }

  const m = arr1.length;
  const n = arr2.length;
  const halfLength = k; //changed

  const getPartitionValues = (partitionX: number, partitionY: number) => {
    const left1 = partitionX === 0 ? -Infinity : arr1[partitionX - 1];
    const right1 = partitionX === m ? Infinity : arr1[partitionX];
    const left2 = partitionY === 0 ? -Infinity : arr2[partitionY - 1];
    const right2 = partitionY === n ? Infinity : arr2[partitionY];

    return { left1, left2, right1, right2 };
  };

  let low = Math.max(0, k - n); // changed
  let high = Math.min(k, m); //changed

  while (low <= high) {
    const partitionX = low + Math.floor((high - low) / 2); // mid
    const partitionY = halfLength - partitionX;

    const { left1, left2, right1, right2 } = getPartitionValues(
      partitionX,
      partitionY,
    );

    if (left1 <= right2 && left2 <= right1) {
      // Correct partition found
      return Math.max(left1, left2); // changed
    } else if (left1 > right2) {
      // Move partition to the left in nums1
      high = partitionX - 1;
    } else {
      // left2 > right1
      // Move partition to the right in nums1
      low = partitionX + 1;
    }
  }
  // dummy
  return 0;
}
