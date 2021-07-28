// https://www.youtube.com/watch?v=XKu_SEDAykw

// [1,2,3,9] sum = 8
// [1,2,4,4] sum = 8

const array1 = [1, 2, 3, 9];
const array2 = [1, 2, 4, 4];
const array3 = [1, 2, 4, 4, 5, 9];

const hasSum = function ({ hasSum, sum }) {
  let pointer1 = 0;
  let pointer2 = hasSum.length - 1;
  while (pointer1 < pointer2) {
    if (hasSum[pointer1] + hasSum[pointer2] === sum) return true;
    if (hasSum[pointer1] + hasSum[pointer2] < sum) pointer1++;
    if (hasSum[pointer1] + hasSum[pointer2] > sum) pointer2--;
  }
  return false;
};
console.log(hasSum({ hasSum: array1, sum: 8 }));
console.log(hasSum({ hasSum: array2, sum: 8 }));
console.log(hasSum({ hasSum: array3, sum: 8 }));
