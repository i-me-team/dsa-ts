/**
 * Problem link: https://leetcode.com/problems/kth-missing-positive-number/
 * Initial Brute Force:
 * 1. Take the last element from the array (as len)
 * 2. Run a loop from 1 to len.
 *  2.1. Count the numbers which are missing in the array.
 *  2.2. If count === k, return i;
 * 3. Outside of the loop check for:
 *  3.1. If the count === 0, i.e. all the elements are present from 1 to len
 *      -> return len + k
 *  3.2. else
 *      -> return len + k - count;
 * Time complexity: O(len * n), n is total elements in the array
 */
export function findKthPositive1(arr: number[], k: number): number {
  const len = arr[arr.length - 1];
  let count = 0;
  for (let i = 1; i <= len; i++) {
    if (!arr.includes(i)) {
      if (++count === k) {
        return i;
      }
    }
  }
  if (count === 0) {
    return len + k;
  } else {
    return len + k - count;
  }
}

/**
 * Optimal Brute Force:
 * Intuition: VVImportant
 * Consider the given array as an empty array, then the 5th missing number would be 5. Now,
 * when we encounter any element(say 2) which is less than current missing number it implies that, since the number that was missing is found so the 5th missing would shift to 6th and so on.
 * now consider empty array again and we added a number greater than k, assume k = 4 and we added 7 to it, here the kth missing element will be 4 itself, as even though seven was added - it indicated that the array might or might not contain the first 6 numbers and as the k = 4 value is lesser than 7, so this kth value would also come under missing value, and as 7 > k, so no effect on k occur. So k is the missing element
 *
 * Time complexity: O(n)
 */

export function findKthPositive2(arr: number[], k: number): number {
  let ans = k;
  for (let i of arr) {
    if (i <= ans) {
      ans++;
    } else {
      break;
    }
  }
  return ans;
}

/**
 * Optimal Approach: Binary Search
 *
 */

export function findKthPositive(arr: number[], k: number): number {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const missing = arr[mid] - (mid + 1);
    if (missing < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low + k;
}

/**
 * Exactly one missing:
 * 1. Take the last element from the array.
 * 2. Use the formula: (n * (n + 1)) / 2 to calculate sum of first n natural number(say sumN)
 * 3. Find the sum of elements in the array.(say sumArr)
 * 4. return sumN - sumArr.
 * Time complexity: O(n), n is the total elements in the array.
 */
