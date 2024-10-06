/**
 * Problem link: https://leetcode.com/problems/word-ladder/
 * Time: O(N * M * 26) where: N - number of words in wordList and M is the word length
 * Space: O(N) for storing each word in Queue and/or Set
 */

import Queue from '../../../queues/queue.ts';

type WordLevelPair = [word: string, level: number];

export function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const wordSet = new Set<string>(wordList);
  const q = new Queue<WordLevelPair>();

  // edge case
  if (!wordSet.has(endWord)) return 0;

  // Init phase
  q.enqueue([beginWord, 1]);
  wordSet.delete(beginWord);

  while (!q.isEmpty()) {
    const [word, lvl] = q.dequeue();
    if (word === endWord) return lvl;

    // Generate all possible one-letter transformations
    for (let i = 0; i < word.length; i++) {
      for (let j = 97; j < 123; j++) {
        const newWord =
          word.slice(0, i) +
          String.fromCharCode(j) +
          word.slice(i + 1, word.length);
        if (wordSet.has(newWord)) {
          q.enqueue([newWord, lvl + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }

  return 0;
}
