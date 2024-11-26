// Problem link: https://www.geeksforgeeks.org/problems/children-sum-parent/1

import type { TreeNode } from './tree-node.ts';

export default function isSumProperty(root: TreeNode<number> | null): number {
  const dfs = (node: TreeNode<number> | null): number => {
    if (!node) return 1;
    if (!node.left && !node.right) return 1;
    let sum = 0;
    if (node.left) sum += node.left.value;
    if (node.right) sum += node.right.value;

    if (node.value !== sum) return 0;
    return dfs(node.left) && dfs(node.right);
  };
  return dfs(root);
}
