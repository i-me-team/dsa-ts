import logger from '../../../utils/logger.ts';
import Queue from '../../queue/queue.ts';

type Weight = number;
type Edge<T> = [T, Weight];

export default class Graph<T> {
  private adjacencyList: Map<T, Edge<T>[]>;

  constructor() {
    this.adjacencyList = new Map<T, Edge<T>[]>();
  }

  addVertex(vertex: T): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1: T, vertex2: T, weight: Weight = 1): void {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList.get(vertex1)!.push([vertex2, weight]);
    // For undirected graph, uncomment the following line:
    // this.adjacencyList.get(vertex2)!.push([vertex1, weight]);
  }

  removeEdge(vertex1: T, vertex2: T): void {
    this.adjacencyList.set(
      vertex1,
      this.adjacencyList.get(vertex1)!.filter(([v]) => v !== vertex2),
    );
    // For undirected graph, uncomment the following line:
    // this.adjacencyList.set(
    //   vertex2,
    //   this.adjacencyList.get(vertex2)!.filter(([v]) => v !== vertex1),
    // );
  }

  removeVertex(vertex: T): void {
    for (const [v, edges] of this.adjacencyList) {
      this.adjacencyList.set(
        v,
        edges.filter(([e]) => e !== vertex),
      );
    }
    this.adjacencyList.delete(vertex);
  }

  getNeighbors(vertex: T): T[] {
    return this.adjacencyList.get(vertex)?.map(([e]) => e) || [];
  }

  // Traversals
  bfs(vertex: T): T[] {
    const queue = new Queue<T>();
    const visited = new Set<T>();
    const result: T[] = [];

    queue.enqueue(vertex);
    visited.add(vertex);

    while (!queue.isEmpty()) {
      const currentVertex = queue.dequeue();
      result.push(currentVertex);

      for (let neighbor of this.getNeighbors(currentVertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.enqueue(neighbor);
        }
      }
    }

    return result;
  }

  printGraph(): void {
    for (const [vertex, edges] of this.adjacencyList) {
      logger(
        `${String(vertex)} -> ${edges
          .map(([v, w]) => `${String(v)}(${w})`)
          .join(', ')}`,
        { color: 'cyan' },
      );
    }
  }
}
