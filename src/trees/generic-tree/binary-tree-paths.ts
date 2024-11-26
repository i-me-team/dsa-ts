import type { TreeNode } from './tree-node.ts';

// Problem link: https://leetcode.com/problems/binary-tree-paths/description/
export default function binaryTreePaths(
  root: TreeNode<number> | null,
): string[] {
  const ans: string[] = [];
  // edge case
  if (!root) return ans;

  const searchBT = (node: TreeNode<number> | null, path: string): void => {
    if (!node!.left && !node!.right) ans.push(path + node!.value);
    node!.left && searchBT(node!.left, `${path}${node!.value}->`);
    node!.right && searchBT(node!.right, `${path}${node!.value}->`);
  };

  searchBT(root, '');
  return ans;
}
