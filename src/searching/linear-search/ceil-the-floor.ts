// https://www.geeksforgeeks.org/problems/ceil-the-floor2802/1
export function getFloorAndCeil(x: number, arr: number[]): [number, number] {
  let ceil = Infinity,
    floor = -Infinity;
  for (let i of arr) {
    if (i === x) {
      floor = i;
      ceil = i;
      break;
    } else if (i < x && i > floor) {
      floor = i;
    } else if (i > x && i < ceil) {
      ceil = i;
    }
  }

  if (floor === -Infinity) {
    floor = -1;
  }

  if (ceil === Infinity) {
    ceil = -1;
  }
  return [floor, ceil];
}
