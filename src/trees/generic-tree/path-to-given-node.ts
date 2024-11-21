import type { TreeNode } from './tree-node.ts';

// Problem link: https://www.interviewbit.com/problems/path-to-given-node/
export default function pathToGiveNode(
  A: TreeNode<number> | null,
  B: number,
): number[] {
  const ans: number[] = [];
  if (!A) return ans;
  const getPath = (node: TreeNode<number> | null) => {
    if (!node) return false;
    ans.push(node.value);
    if (node.value === B) return true;
    if (getPath(node.left) || getPath(node.right)) {
      return true;
    }
    ans.pop();
    return false;
  };
  getPath(A);
  return ans;
}
