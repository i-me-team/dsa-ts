import Queue from '../../queues/queue.ts';
import type { TreeNode } from './tree-node.ts';

// Problem link: https://leetcode.com/problems/maximum-width-of-binary-tree/description/
export default function widthOfBinaryTree(
  root: TreeNode<number> | null,
): number {
  const q = new Queue<[TreeNode<number> | null, number]>();
  let max = -Infinity;
  // init phase
  q.enqueue([root, 0]);
  while (!q.isEmpty()) {
    let sz = q.size;
    const left = q.peek()[1];
    const right = q.peekBack()[1];
    max = Math.max(max, right - left + 1);
    while (sz--) {
      const [node, idx] = q.dequeue()!;
      node!.left && q.enqueue([node!.left, 2 * (idx - left) + 1]);
      node!.right && q.enqueue([node!.right, 2 * (idx - left) + 2]);
    }
  }
  return max;
}
