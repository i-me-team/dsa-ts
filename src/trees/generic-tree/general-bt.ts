import Queue from '../../queues/queue.ts';
import type { TreeNode } from '../generic-tree/tree-node.ts';

export default class BinaryTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  getHeight(node: TreeNode<T> | null): number {
    if (!node) return 0;
    return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  isEmpty(): boolean {
    return this.root === null;
  }

  recursivePreOrderTraversal(): T[] {
    const res: T[] = [];
    const node = this.root;
    const recurse = (node: TreeNode<T> | null): void => {
      // base case
      if (!node) return;
      // main case
      res.push(node.value);
      recurse(node.left);
      recurse(node.right);
    };

    recurse(node);
    return res;
  }

  iterativePreOrderTraversal(): T[] {
    const node = this.root;
    const stack: TreeNode<T>[] = [];
    const res: T[] = [];
    if (!node) return res;

    // init phase
    stack.push(node);
    while (stack.length > 0) {
      const nd = stack.pop()!;
      nd.right && stack.push(nd.right);
      nd.left && stack.push(nd.left);
      res.push(nd.value);
    }

    return res;
  }

  recursiveInOrderTraversal(): T[] {
    const res: T[] = [];
    const node = this.root;
    const recurse = (node: TreeNode<T> | null): void => {
      // base case
      if (!node) return;
      // main case
      recurse(node.left);
      res.push(node.value);
      recurse(node.right);
    };

    recurse(node);
    return res;
  }

  iterativeInOrderTraversal(): T[] {
    const stack: TreeNode<T>[] = [];
    const res: T[] = [];
    let node = this.root;
    while (true) {
      if (node) {
        stack.push(node);
        node = node.left;
      } else {
        if (stack.length === 0) break;
        const nd = stack.pop()!;
        res.push(nd.value);
        node = nd.right;
      }
    }
    return res;
  }

  postOrderTraversal(): T[] {
    const res: T[] = [];
    const node = this.root;
    const recurse = (node: TreeNode<T> | null): void => {
      // base case
      if (!node) return;
      // main case
      recurse(node.left);
      recurse(node.right);
      res.push(node.value);
    };

    recurse(node);
    return res;
  }

  levelOrderTraversal(): T[][] {
    const node = this.root;
    const res: T[][] = [];
    if (!node) return res;
    const q = new Queue<TreeNode<T>>();
    q.enqueue(node);
    while (!q.isEmpty()) {
      const qSize = q.size;
      const medList: T[] = [];
      for (let i = 0; i < qSize; i++) {
        const nd = q.dequeue();
        nd.left && q.enqueue(nd.left);
        nd.right && q.enqueue(nd.right);
        medList.push(nd.value);
      }
      res.push(medList);
    }

    return res;
  }
}
