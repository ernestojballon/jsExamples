/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let half = someNum/2;
    if (someNum/2 == Math.floor(half)){
        return false;
    }else{
        return true;
    }
  
}
console.log(isEven(3));//true
console.log(isEven(6));//false

console.log(isEven(4));//false
console.log(isEven(7));//true

