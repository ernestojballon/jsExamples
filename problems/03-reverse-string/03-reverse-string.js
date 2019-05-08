/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let newArr=[];
    let arr = [];
    arr.push(...someStr);
    while(arr.length){
        newArr.push(arr.pop());
    }
    return newArr.join("");
}

console.log(reverseStr("hello"));