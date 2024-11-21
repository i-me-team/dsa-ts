// Problem link: https://leetcode.com/problems/diameter-of-binary-tree/

import type { TreeNode } from './tree-node.ts';

export default function diameterOfBinaryTree(
  root: TreeNode<number> | null,
): number {
  let max = -Infinity;
  const solve = (node: TreeNode<number> | null): number => {
    if (!node) {
      return 0;
    }
    const l = solve(node.left);
    const r = solve(node.right);
    max = Math.max(max, l + r);
    return 1 + Math.max(l, r);
  };
  solve(root);
  return max === -Infinity ? 0 : max;
}
