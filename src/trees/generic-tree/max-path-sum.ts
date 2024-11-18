// Problem link: https://leetcode.com/problems/binary-tree-maximum-path-sum/

import type { TreeNode } from './tree-node.ts';

export default function maxPathSum(root: TreeNode<number> | null): number {
  let maxSum = -Infinity;

  const solve = (node: TreeNode<number> | null): number => {
    // base case
    if (!node) return 0;
    const l = solve(node.left);
    const r = solve(node.right);

    // Case 1
    const neecheHiAnswerMila = l + r + node.value;
    // Case 2
    const koiEkAccha = Math.max(r, l) + node.value;
    // Case 3
    const onlyRootAccha = node.value;

    maxSum = Math.max(maxSum, neecheHiAnswerMila, koiEkAccha, onlyRootAccha);

    return Math.max(koiEkAccha, onlyRootAccha);
  };

  solve(root);
  return maxSum;
}
