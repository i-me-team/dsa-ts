import Queue from '../../queue/queue.ts';

/**
 * Key takeaway learning from this problem:
 * Learn how to create graph from given prerequisites array
 */

export function canFinish(
  numCourses: number,
  prerequisites: number[][],
): boolean {
  const q = new Queue<number>();
  const inDegrees = new Array(numCourses).fill(0);
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const res: number[] = [];

  // Build the graph and calculate in-degrees
  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    inDegrees[course]++;
  }

  inDegrees.forEach((el, idx) => el === 0 && q.enqueue(idx));

  while (!q.isEmpty()) {
    const vtx = q.dequeue();
    res.push(vtx);
    for (let nbr of graph[vtx]) {
      inDegrees[nbr]--;
      if (inDegrees[nbr] === 0) {
        q.enqueue(nbr);
      }
    }
  }

  return res.length === numCourses;
}
