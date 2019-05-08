/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {

    let arr = [];
    arr.push(...someStr);
    for(let x=0;x<arr.length/2;x++){
        if(arr[x]!=arr[arr.length-1-x]){
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('arra'));//true
console.log(isPalindrome('artootra'));//true
console.log(isPalindrome('fesfes'));//false
console.log(isPalindrome('123321'));//true
console.log(isPalindrome('1234567'));//false