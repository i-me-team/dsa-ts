import Deque from '../queues/deque.ts';

// Problem link: https://leetcode.com/problems/sliding-window-maximum/description/

export function maxSlidingWindow(nums: number[], k: number): number[] {
  const res = [];
  const len = nums.length;
  let i = 0,
    j = 0;
  const deque = new Deque<number>();
  while (j < len) {
    // Remove all elements smaller than the current element
    // from the back of deque
    while (!deque.isEmpty() && nums[deque.peekBack()!] < nums[j]) {
      deque.popBack();
    }

    // Add current element's index to deque
    deque.pushBack(j);

    if (j - i + 1 === k) {
      // Front of deque has the maximum element's index
      res.push(nums[deque.peekFront()!]);

      // If the element to be removed is the maximum element
      if (deque.peekFront() === i) {
        deque.popFront();
      }
      i++;
    }
    j++;
  }

  return res;
}
