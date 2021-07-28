const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function bin({ arr, e }) {
  const pointer = Math.floor(arr.length / 2);
  if (arr[pointer] === e) {
    return pointer;
  }
  if (arr[pointer] > e) {
    return bin({ arr: arr.slice(0, pointer), e });
  }
  if (arr[pointer] < e) {
    return pointer + bin({ arr: arr.slice(pointer), e });
  }
}

console.log(bin({ arr, e: 3 }));
