// Problem link: https://www.naukri.com/code360/problems/painter-s-partition-problem_1089557?leftPanelTabValue=PROBLEM

export function findLargestMinDistance(boards: number[], k: number): number {
  let low = Math.max(...boards);
  let high = boards.reduce((a, c) => a + c, 0);
  let ans = 0;

  const canPaint = (time: number): boolean => {
    let initArea = 0,
      painter = 1;
    for (let ar of boards) {
      if (initArea + ar <= time) {
        initArea += ar;
      } else {
        painter++;
        initArea = ar;
      }
    }
    return painter <= k;
  };

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (canPaint(mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}
