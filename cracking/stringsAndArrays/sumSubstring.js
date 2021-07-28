/*
orig=[-2,2,5,-11,6]
[3,2,3,4,-11,22,1]
candidate = 4
sum = max(a+b,b) if(sum>total) total=candidate
candidate = max(total+c,c) if(candidate>total) total=candidate


maxVal = orig[0]
previousMax = 0
for Item in orig
  previousMax = max(previousMax+Item,Item)
  maxVal = max(previousMax,maxVal)

previousMax -4
maxVal      7
*/

// const getSumSubstring = (arr) => {
//   let greaterContinuosSum = arr[0];
//   let previousMax = 0;
//   arr.forEach((item) => {
//     previousMax = Math.max(previousMax + item, item);
//     greaterContinuosSum = Math.max(previousMax, greaterContinuosSum);
//   });
//   return greaterContinuosSum;
// };
// console.log(getSumSubstring([-2, 2, 5, -11, 6, 2]));

var twoSum = function (nums, target) {
  let complementsMap = new Map();

  return nums.some((num, index) => {
    const complement = target - num;

    const complementFound = complementsMap.get(complement);
    if (complementFound) return [index, complementFound];

    complementsMap.set(complement, index);
    return '';
  });
};

console.log(twoSum([2, 7, 11, 15], 9));
