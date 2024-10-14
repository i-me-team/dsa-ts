/**
 * Brute force 1
 * 1. Use merge algorithm to merge 2 sorted subarray.O(m + n)
 * 2. If m + n is even return (result[floor(m + n / 2) - 1] + result[floor(m + n / 2)]) / 2
 *      2.1. else return result[floor(m + n / 2)]
 * Time Complexity: O(m + n)
 * Space Complexity: O(m + n)
 */

export function findMedianSortedArrays1(
  nums1: number[],
  nums2: number[],
): number {
  let i = 0,
    j = 0,
    k = 0;
  const len1 = nums1.length,
    len2 = nums2.length;
  const res = new Array(len1 + len2);
  while (i < len1 && j < len2) {
    if (nums1[i] < nums2[j]) {
      res[k++] = nums1[i++];
    } else {
      res[k++] = nums2[j++];
    }
  }
  while (i < len1) {
    res[k++] = nums1[i++];
  }
  while (j < len2) {
    res[k++] = nums2[j++];
  }

  const mid = Math.floor(res.length / 2);
  if (res.length % 2 === 1) {
    return res[mid];
  } else {
    return (res[mid - 1] + res[mid]) / 2;
  }
}

/**
 * Brute force 2(Better)
 * While working on the above approach we found that we do not need to store all the elements in a temp array. What we need is to only get the mid and mid - 1 indexed elements in case of even length and mid in case of odd length result. So, based on this intuition we saved the space. So now, the space is O(1) but time still is O(m + n).
 */

export function findMedianSortedArrays2(
  nums1: number[],
  nums2: number[],
): number {
  const l1 = nums1.length,
    l2 = nums2.length;
  const l = l1 + l2;
  let idx2 = Math.floor(l / 2);
  let idx1 = idx2 - 1;
  let el1 = -1,
    el2 = -1;

  let i = 0,
    j = 0,
    count = 0;
  while (i < l1 && j < l2) {
    if (nums1[i] < nums2[j]) {
      if (count === idx1) el1 = nums1[i];
      if (count === idx2) el2 = nums1[i];
      i++;
      count++;
    } else {
      if (count === idx1) el1 = nums2[j];
      if (count === idx2) el2 = nums2[j];
      j++;
      count++;
    }
  }

  while (i < l1) {
    if (count === idx1) el1 = nums1[i];
    if (count === idx2) el2 = nums1[i];
    i++;
    count++;
  }
  while (j < l2) {
    if (count === idx1) el1 = nums2[j];
    if (count === idx2) el2 = nums2[j];
    j++;
    count++;
  }
  if (l % 2 === 1) {
    return el2;
  }
  return (el1 + el2) / 2;
}

/**
 * Optimal Solution: Binary Search
 * Time complexity: O(min(m, n))
 * Space complexity: O(1)
 */

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number {
  // Ensure nums1 is the smaller array for optimization
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  const totalLength = m + n;
  const halfLength = Math.floor((totalLength + 1) / 2);

  const getPartitionValues = (partitionX: number, partitionY: number) => {
    const left1 = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const right1 = partitionX === m ? Infinity : nums1[partitionX];
    const left2 = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const right2 = partitionY === n ? Infinity : nums2[partitionY];

    return { left1, left2, right1, right2 };
  };

  let low = 0;
  let high = m;

  while (low <= high) {
    const partitionX = low + Math.floor((high - low) / 2); // mid
    const partitionY = halfLength - partitionX;

    const { left1, left2, right1, right2 } = getPartitionValues(
      partitionX,
      partitionY,
    );

    if (left1 <= right2 && left2 <= right1) {
      // Correct partition found
      if (totalLength % 2 === 0) {
        // Even total length
        return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
      } else {
        // Odd total length
        return Math.max(left1, left2);
      }
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
