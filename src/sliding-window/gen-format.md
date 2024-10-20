# Fixed Size Sliding Window format

```js
while (j < lenOfArrayOrString) {
  // Calculations
  // Below k is the size of window which is given in the problem and (j - i + 1) is the current window size
  if (j - i + 1 === k) {
    // calculate answer/answer candidate

    // Calculations that need to be done in order to remove i
    // Maintain window size and
    // slide the window
    i++;
  }
  // Slide the window
  j++;
}
return ans;
```

# Variable Size Sliding Window format

```js
while (j < lenOfArrayOrString) {
  // Calculations
  // Below k is the condition which is given in the problem
  if (condition === k) {
    // calculate answer/answer candidate
  } else if (condition > k) {
    while (condition > k) {
      // remove calculations for i
      // and slide the window
      i++;
    }
  }
  // Slide the window
  j++;
}
return ans;
```
