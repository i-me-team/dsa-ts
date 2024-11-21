import type { TreeNode } from './tree-node.ts';

// problem link: https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1
export default function boundaryTraversal(
  root: TreeNode<number> | null,
): number[] {
  // Handle empty tree case
  if (!root) return [];

  const result: number[] = [];

  // Check if root is a leaf
  const isLeaf = (node: TreeNode<number> | null): boolean => {
    return node !== null && !node.left && !node.right;
  };

  // Add left boundary (excluding leaves)
  const addLeftBoundary = (node: TreeNode<number> | null) => {
    let current = node;
    while (current) {
      // Skip if it's a leaf
      if (!isLeaf(current)) {
        result.push(current.value);
      }

      // Prefer left child, but go to right if no left child
      if (current.left) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  };

  // Add right boundary in reverse (excluding leaves)
  const addRightBoundary = (node: TreeNode<number> | null) => {
    const temp: number[] = [];
    let current = node;
    while (current) {
      // Skip if it's a leaf
      if (!isLeaf(current)) {
        temp.push(current.value);
      }

      // Prefer right child, but go to left if no right child
      if (current.right) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    // Add in reverse order
    while (temp.length) {
      result.push(temp.pop()!);
    }
  };

  // Add leaf nodes
  const addLeaves = (node: TreeNode<number> | null) => {
    if (!node) return;

    if (isLeaf(node)) {
      result.push(node.value);
      return;
    }

    addLeaves(node.left);
    addLeaves(node.right);
  };

  // Add root if it's not a leaf
  if (!isLeaf(root)) {
    result.push(root.value);
  }

  // Add left boundary
  if (root.left) {
    addLeftBoundary(root.left);
  }

  // Add leaves
  addLeaves(root);

  // Add right boundary
  if (root.right) {
    addRightBoundary(root.right);
  }

  return result;
}
