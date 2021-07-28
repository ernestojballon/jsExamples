const arr = [3, 7, 5, 6, 8, 9, 1, 0, 4];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      const aux = arr[1];
      arr[1] = arr[0];
      arr[0] = aux;
    }
    return arr;
  }
  const pivot = Math.floor(arr.length / 2);
  const left = [];
  const right = [];
  for (let x = 0; x < arr.length; x++) {
    if (pivot !== x) {
      if (arr[pivot] >= arr[x]) left.push(arr[x]);
      if (arr[pivot] < arr[x]) right.push(arr[x]);
    }
  }
  return [...quickSort(left), arr[pivot], ...quickSort(right)];
}

console.log(quickSort(arr));
/*

arr=[]
arr=[1]
arr = [2,1] = [1,2] // swap them if need it
arr = [1,3,2]  arr = [2,1,3]  1,3,2
arr = [2,3,1,4] arr=[1,2,3,4]

*/
