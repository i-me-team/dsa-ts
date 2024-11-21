// Problem link: https://leetcode.com/problems/balanced-binary-tree/

import { TreeNode } from './tree-node.ts';

export function isBalanced(root: TreeNode<number> | null): boolean {
  if (!root) return true;

  const changedHeightImplementation = (
    node: TreeNode<number> | null,
  ): number => {
    if (!node) return 0;
    const leftST = changedHeightImplementation(node.left);
    if (leftST === -1) return -1;
    const rightST = changedHeightImplementation(node.right);
    if (rightST === -1) return -1;

    if (Math.abs(leftST - rightST) > 1) return -1;
    return Math.max(leftST, rightST) + 1;
  };

  return changedHeightImplementation(root) !== -1;
}
