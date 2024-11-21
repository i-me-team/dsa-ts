function takeCharacters(s: string, k: number): number {
  console.log('\nInput:', s, 'k:', k);
  const freqList: number[] = [0, 0, 0];

  // Count initial frequencies
  for (let ch of s) {
    freqList[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  console.log('Initial frequencies [a,b,c]:', freqList);

  // Edge case
  if (Math.min(...freqList) < k) {
    console.log(
      'Edge case: minimum frequency',
      Math.min(...freqList),
      'is less than k:',
      k,
    );
    return -1;
  }

  let res = Infinity;
  let i = 0,
    j = 0;
  const len = s.length;

  console.log('\nStarting sliding window:');
  while (j < len) {
    freqList[s.charCodeAt(j) - 'a'.charCodeAt(0)]--;
    console.log(`\nj=${j}, removed character: ${s[j]}`);
    console.log('Frequencies after removal:', [...freqList]);

    while (Math.min(...freqList) < k) {
      freqList[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      console.log(`i=${i}, added back character: ${s[i]}`);
      console.log('Frequencies after adding back:', [...freqList]);
      i++;
    }

    const currentWindow = j - i + 1;
    const currentResult = len - currentWindow;
    console.log('Current window size:', currentWindow);
    console.log('Current result candidate:', currentResult);

    res = Math.min(res, currentResult);
    console.log('Best result so far:', res);
    j++;
  }

  console.log('\nFinal result:', res);
  return res;
}

// Test cases
const testCases: [string, number][] = [
  //   ['aabaaaacaa', 2],
  ['aabaaaacaabc', 2],
  //   ['abc', 1],
  //   ['aaa', 1],
];

testCases.forEach(([s, k]) => {
  console.log('\n=== Testing ===');
  console.log('Result:', takeCharacters(s, k));
  console.log('==============');
});
