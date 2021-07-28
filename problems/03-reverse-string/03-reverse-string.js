/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  let newArr = [];
  let arr = [];
  arr.push(...someStr);
  while (arr.length) {
    newArr.push(arr.pop());
  }
  return newArr.join('');
}
function reverseStr2(someStr) {
  let arr = [...someStr];
  for (let x = 0; x < arr.length / 2; x++) {
    const aux = arr[x];
    arr[x] = arr[arr.length - 1 - x];
    arr[arr.length - 1 - x] = aux;
  }

  return arr.join('');
}

console.log(reverseStr2('hello'));
