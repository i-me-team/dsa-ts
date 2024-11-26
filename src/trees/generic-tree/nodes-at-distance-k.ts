// Problem link: https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/
import Queue from '../../queues/queue.ts';
import type { TreeNode } from './tree-node.ts';

export default function distanceK(
  root: TreeNode<number> | null,
  target: TreeNode<number> | null,
  k: number,
): number[] {
  const map = new Map<TreeNode<number> | null, TreeNode<number> | null>();
  const inOrder = (node: TreeNode<number> | null): void => {
    if (!node) return;
    if (node.left) {
      map.set(node.left, node);
    }
    inOrder(node.left);
    if (node.right) {
      map.set(node.right, node);
    }
    inOrder(node.right);
  };
  inOrder(root);
  const q = new Queue<TreeNode<number> | null>();
  const set = new Set<number>();
  q.enqueue(target);
  set.add(target!.value);
  while (!q.isEmpty()) {
    if (k === 0) break;
    let sz = q.size;
    while (sz--) {
      const node = q.dequeue();
      if (node!.left && !set.has(node!.left.value)) {
        q.enqueue(node!.left);
        set.add(node!.left.value);
      }

      if (node!.right && !set.has(node!.right.value)) {
        q.enqueue(node!.right);
        set.add(node!.right.value);
      }

      if (map.has(node) && !set.has(map.get(node)!.value)) {
        const nodeVal = map.get(node)!;
        q.enqueue(nodeVal);
        set.add(map.get(node)!.value);
      }
    }
    k--;
  }
  const res: number[] = [];
  while (!q.isEmpty()) {
    res.push(q.dequeue()!.value);
  }

  return res;
}
