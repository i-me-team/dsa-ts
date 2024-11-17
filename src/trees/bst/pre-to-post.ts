function preToPost(preorder: number[]): number[] {
  const postorder: number[] = [];
  let index = 0;

  function convert(min: number, max: number, level = 0): void {
    if (index >= preorder.length) return;

    const val = preorder[index];
    console.log(
      `${' '.repeat(level * 2)}Checking ${val} in range (${min}, ${max})`,
    );

    if (val < min || val > max) {
      console.log(`${' '.repeat(level * 2)}${val} outside range, returning`);
      return;
    }

    index++;
    console.log(`${' '.repeat(level * 2)}Processing left subtree of ${val}`);
    convert(min, val, level + 1); // Left subtree

    console.log(`${' '.repeat(level * 2)}Processing right subtree of ${val}`);
    convert(val, max, level + 1); // Right subtree

    postorder.push(val);
    console.log(`${' '.repeat(level * 2)}Added ${val} to postorder`);
  }

  convert(-Infinity, Infinity);
  return postorder;
}

// Test
console.log(preToPost([8, 5, 1, 7, 10, 12]));

// console.log(preToPost([90, 20, 10, 50, 30, 40, 35, 100, 110, 102, 108, 105]));
