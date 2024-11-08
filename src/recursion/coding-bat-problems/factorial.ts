export default function factorial(n: number): number {
  // base case
  if (n === 0) {
    return 1;
  }
  return factorial(n - 1) * n;
}
