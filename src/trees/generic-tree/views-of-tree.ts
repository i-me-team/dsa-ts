import Queue from '../../queues/queue.ts';
import type { TreeNode } from './tree-node.ts';

// Problem link: https://leetcode.com/problems/binary-tree-right-side-view/description/
export function rightView(root: TreeNode<number> | null): number[] {
  if (!root) return [];
  const res: number[] = [];
  const q = new Queue<TreeNode<number>>();
  q.enqueue(root);
  while (!q.isEmpty()) {
    let tempQSz = q.size;
    let node: TreeNode<number> | null = null;
    while (tempQSz--) {
      node = q.dequeue();
      node.right && q.enqueue(node.right);
      node.left && q.enqueue(node.left);
    }
    res.push(node!.value);
  }

  return res;
}
// Problem link: https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1
export function leftView(root: TreeNode<number> | null): number[] {
  if (!root) return [];
  const res: number[] = [];
  const q = new Queue<TreeNode<number>>();
  q.enqueue(root);
  while (!q.isEmpty()) {
    let tempQSz = q.size;
    let node: TreeNode<number> | null = null;
    while (tempQSz--) {
      node = q.dequeue();
      node.left && q.enqueue(node.left);
      node.right && q.enqueue(node.right);
    }
    res.push(node!.value);
  }

  return res;
}
// Problem link: https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1
export function topView(root: TreeNode<number> | null): number[] {
  const q = new Queue<[TreeNode<number> | null, number]>();
  const res: number[] = [];
  const mid = Math.floor((1 + 1e5) / 2); // Range is given
  const map = new Map<number, number>();
  let minPos = mid,
    maxPos = mid;
  // edge case
  if (!root) return res;
  // init phase
  q.enqueue([root, mid]);
  while (!q.isEmpty()) {
    const [node, pos] = q.dequeue()!;
    if (!map.has(pos)) {
      map.set(pos, node!.value);
      minPos = Math.min(pos, minPos);
      maxPos = Math.max(pos, maxPos);
    }
    node!.left && q.enqueue([node!.left, pos - 1]);
    node!.right && q.enqueue([node!.right, pos + 1]);
  }
  for (let i = minPos; i <= maxPos; i++) {
    if (map.has(i)) {
      res.push(map.get(i)!);
    }
  }
  return res;
}

// Problem link: https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1
export function bottomView(root: TreeNode<number | null>): number[] {
  const res: number[] = [];
  // edge case
  if (!root) return res;
  const map = new Map<number, number>();
  const q = new Queue<[TreeNode<number | null>, number]>();
  const mid = Math.floor((1 + 1e5) / 2);
  let minPos = mid,
    maxPos = mid;
  // init phase
  q.enqueue([root, mid]);
  while (!q.isEmpty()) {
    const [node, pos] = q.dequeue();

    map.set(pos, node.value!);

    minPos = Math.min(pos, minPos);
    maxPos = Math.max(pos, maxPos);

    node.left && q.enqueue([node.left, pos - 1]);
    node.right && q.enqueue([node.right, pos + 1]);
  }

  for (let i = minPos; i <= maxPos; i++) {
    if (map.has(i)) {
      res.push(map.get(i)!);
    }
  }

  return res;
}
