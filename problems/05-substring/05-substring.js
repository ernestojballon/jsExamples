/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let newArr = [];
    let arr = someStr;
    for(let x = 0; x < arr.length;x++){
        if(startIndex<=x && x<endIndex){
            newArr.push(arr[x]);
        }
    }
    return newArr.join("");

}
console.log(substring("hello",0,3));// hel
console.log(substring("hello",2,3));//l
console.log(substring("ernesto",2,3));//n
console.log(substring("hello",2,30));//hello
console.log(substring("hello",-2,3));//hel