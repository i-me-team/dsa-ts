import Queue from '../../queues/queue.ts';
import type { TreeNode } from './tree-node.ts';

// Problem link: https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
export default function verticalTraversal(
  root: TreeNode<number> | null,
): number[][] {
  const res: number[][] = [];
  const q = new Queue<[TreeNode<number> | null, number]>();
  // considering the range given in question, I put 500 at the middle value
  q.enqueue([root, 500]);
  while (!q.isEmpty()) {
    const map = new Map<number, number[]>();
    let tempSz = q.size;
    while (tempSz--) {
      const [node, pos] = q.dequeue()!;
      if (!node) continue;
      if (!map.has(pos)) {
        map.set(pos, []);
      }
      map.get(pos)!.push(node!.value);
      node.left && q.enqueue([node.left, pos - 1]);
      node.right && q.enqueue([node.right, pos + 1]);
    }
    for (let [pos, val] of map) {
      if (!res[pos]) res[pos] = [];
      res[pos] = [...res[pos], ...val.sort((a, b) => a - b)];
    }
  }

  return res.filter(Boolean);
}
