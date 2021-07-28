/* 
Given a list of daily temperatures T, return a list such that, for each day
in the input, tells you how many days you would have to wait until a warmer
temperature. If there is no future day for which this is possible, put 0
instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73]
your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of the temperatures will be in the range [1, 3000]. Each
temperature will be an integer in the range [30, 100]
sol:
idx = [ 0,  1,  2,  3,  4,  5,  6,  7]
arr = [73, 74, 75, 71, 69, 72, 76, 73]
arr = [ 5,  4,  3,  2,  6]
notmore/stack = [0,1,2,3]
result = [0,0,0,0,0,0,0,0]
Facts:
  * left values on the stack always the greater
  * result array is the size as the original
  * save index in the stack because i want to know which 
    element of the result array i want to update.

*/

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

const toWarmer = (tempArray) => {
  const stack = [];
  const result = [...tempArray].fill(0);

  tempArray.forEach((elem, idx) => {
    if (stack.length === 0) {
      stack.push(idx);
    } else {
      while (stack.length && tempArray[stack[stack.length - 1]] < elem) {
        const lastElementIndex = stack.length - 1;
        const toGreater = idx - stack[lastElementIndex];
        result[stack[lastElementIndex]] = toGreater;
        stack.pop();
      }
      stack.push(idx);
    }
  });
  // console.log(stack);
  return result;
};

console.log(toWarmer(temperatures));
