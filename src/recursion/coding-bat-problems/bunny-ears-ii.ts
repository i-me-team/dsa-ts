/**
 * We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears.
 * The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot.
 * Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).
 * bunnyEars2(0) → 0
 * bunnyEars2(1) → 2
 * bunnyEars2(2) → 5
 */

export default function bunnyEars2(bunnies: number): number {
  // base case
  if (bunnies === 0) {
    return 0;
  }

  let hyp = bunnyEars2(bunnies - 1);
  return hyp + (bunnies % 2 === 0 ? 3 : 2);
}