# JavaScript Bug: Division by Zero
This repository demonstrates a common bug in JavaScript related to division by zero. The function `foo` is supposed to return 0 if either `a` or `b` is 0. However, it throws an error when both `a` and `b` are 0.

## Bug Description
The bug occurs when the function `foo` receives 0 as input for both parameters. Instead of correctly returning 0, it raises a division by zero error, which is not the intended behavior.

## Bug Reproduction
1. Clone the repository.
2. Run `bug.js`.
3. Observe the division by zero error.

## Solution
The `bugSolution.js` file provides a corrected version of the function. It first checks explicitly if both `a` and `b` are 0, returning 0 in this case. Otherwise it proceeds to calculate `a/b`.
