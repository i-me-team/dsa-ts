import type { TreeNode } from './tree-node.ts';

// Problem link: https://www.geeksforgeeks.org/problems/burning-tree/1
export default function minTime(
  root: TreeNode<number> | null,
  target: number,
): number {
  let res = 0;

  const dfs = (node: TreeNode<number> | null): number => {
    if (!node) return 0;

    const lh = dfs(node.left);
    const rh = dfs(node.right);

    if (node.value === target) {
      res = Math.max(lh, rh);
      return -1;
    } else if (lh >= 0 && rh >= 0) {
      return 1 + Math.max(lh, rh);
    } else {
      const d = Math.abs(lh) + Math.abs(rh);
      res = Math.max(res, d);
      return Math.min(lh, rh) - 1;
    }
  };

  dfs(root);

  return res;
}
