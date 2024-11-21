import type { TreeNode } from './tree-node.ts';

export default function isSymmetric(root: TreeNode<number> | null): boolean {
  if (!root) return true;
  const check = (
    l: TreeNode<number> | null,
    r: TreeNode<number> | null,
  ): boolean => {
    if (!l && !r) return true;
    if (!l || !r) return false;
    return (
      l.value === r.value && check(l.left, r.right) && check(l.right, r.left)
    );
  };
  return check(root.left, root.right);
}
