const arr = [1, 2, 3];

function sum(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sum(arr.slice(1));
}

// console.log(sum(arr));
