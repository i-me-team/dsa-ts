// Problem link: https://leetcode.com/problems/same-tree/

import Queue from '../../queues/queue.ts';
import type { TreeNode } from './tree-node.ts';

// Using DFS
export function isSameTreeDFS(
  p: TreeNode<number> | null,
  q: TreeNode<number> | null,
): boolean {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.value !== q.value) return false;

  return isSameTreeDFS(p.left, q.left) && isSameTreeDFS(p.right, q.right);
}

// Using BFS
export function isSameTreeBFS(
  p: TreeNode<number> | null,
  q: TreeNode<number> | null,
): boolean {
  if (!p && !q) return true;
  if (!p || !q) return false;

  const q1 = new Queue<TreeNode<number>>();
  const q2 = new Queue<TreeNode<number>>();

  q1.enqueue(p);
  q2.enqueue(q);

  while (!q1.isEmpty() && !q2.isEmpty()) {
    const nd1 = q1.dequeue()!;
    const nd2 = q2.dequeue()!;
    if (nd1.value !== nd2.value) return false;

    if (nd1.left && nd2.left) {
      q1.enqueue(nd1.left);
      q2.enqueue(nd2.left);
    } else if (nd1.left || nd2.left) {
      return false;
    }

    if (nd1.right && nd2.right) {
      q1.enqueue(nd1.right);
      q2.enqueue(nd2.right);
    } else if (nd1.right || nd2.right) {
      return false;
    }
  }
  return true;
}
