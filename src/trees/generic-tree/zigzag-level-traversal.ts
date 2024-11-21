// Problem link: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/

import Queue from '../../queues/queue.ts';
import type { TreeNode } from './tree-node.ts';

export default function zigzagLevelOrder(
  root: TreeNode<number> | null,
): number[][] {
  if (!root) return [];
  const res: number[][] = [];
  let rtl = false;
  const q = new Queue<TreeNode<number>>();
  q.enqueue(root);
  while (!q.isEmpty()) {
    let tempQSz = q.size;
    const resEl: number[] = [];
    for (let i = 0; i < tempQSz; i++) {
      const nd = q.dequeue()!;
      nd.left && q.enqueue(nd.left);
      nd.right && q.enqueue(nd.right);
      const idx = rtl ? tempQSz - 1 - i : i;
      resEl[idx] = nd.value;
    }
    rtl = !rtl;
    res.push(resEl);
  }
  return res;
}
