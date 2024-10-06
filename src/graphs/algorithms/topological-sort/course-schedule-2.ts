/**
 * Problem link: https://leetcode.com/problems/course-schedule-ii/description/
 * Watch out for  way to build graph from prerequisites array
 * */

import Queue from '../../../queues/queue.ts';

export function findOrder(
  numCourses: number,
  prerequisites: number[][],
): number[] {
  const inDegrees: number[] = new Array(numCourses).fill(0);
  const q = new Queue<number>();
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const res = [];

  // Build the graph and inDegrees array
  for (let [course, pre] of prerequisites) {
    graph[pre].push(course);
    inDegrees[course]++;
  }

  inDegrees.forEach((el, idx) => el === 0 && q.enqueue(idx));

  while (!q.isEmpty()) {
    const vtx = q.dequeue();
    res.push(vtx);
    for (let neighbor of graph[vtx]) {
      inDegrees[neighbor]--;
      if (inDegrees[neighbor] === 0) {
        q.enqueue(neighbor);
      }
    }
  }

  return res.length === numCourses ? res : [];
}
