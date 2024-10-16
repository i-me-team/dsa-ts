// Problem link: https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1

import Queue from '../queues/queue.ts';

/**
 * Brute force
 */
export function printFirstNegativeInteger1(
  n: number,
  k: number,
  arr: number[],
): number[] {
  const result = [];
  for (let i = 0; i <= n - k; i++) {
    let flag = false;
    for (let j = i; j < i + k; j++) {
      if (arr[j] < 0 && !flag) {
        flag = true;
        result.push(arr[j]);
      }
    }
    if (!flag) {
      result.push(0);
    }
  }

  return result;
}

/**
 * Optimal: Sliding Window
 */
export function printFirstNegativeInteger(
  n: number,
  k: number,
  arr: number[],
): number[] {
  const result = [];
  //   const q: { [key: number]: number } = {};
  //   let front = 0,
  // rear = 0;
  // Used my defined queue class
  const q = new Queue<number>();
  let i = 0,
    j = 0;
  while (j < n) {
    // Calculation
    if (arr[j] < 0) {
      q.enqueue(arr[j]);
    }

    if (j - i + 1 === k) {
      if (!q.isEmpty()) {
        result.push(q.peek());
        if (q.peek() === arr[i]) {
          q.dequeue();
        }
      } else {
        result.push(0);
      }
      i++;
    }
    j++;
  }
  return result;
}
