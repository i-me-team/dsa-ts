import type { TreeNode } from './tree-node.ts';

// Problem link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
export default function lowestCommonAncestor(
  root: TreeNode<number> | null,
  p: TreeNode<number> | null,
  q: TreeNode<number> | null,
): TreeNode<number> | null {
  const solve = (node: TreeNode<number> | null): TreeNode<number> | null => {
    // edge case
    if (!node || node === p || node === q) return node;
    const leftN = solve(node.left);
    const rightN = solve(node.right);
    if (leftN && rightN) return node;

    return leftN ?? rightN;
  };
  return solve(root);
}
