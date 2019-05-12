/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */

function substring(someStr, startIndex, endIndex) {

    let start = startIndex || 0;
    let len = someStr.length;
    let end = endIndex || len-1 ;
    let newArr = [];

    if (start<0) start += len;
    if (end<0) end += len;

    start = Math.max(Math.min(start,len),0);// -len+1 < start < len-1
    end = Math.min(Math.max(end,0),len);//      -len+1 < end < len-1

    for(let x = 0; x < len;x++){
        if(start <= x && x < end){
            newArr.push(someStr[x]);
        }
    }
    
    return newArr.join("");

}
console.log(substring("hello",0,3));// hel
console.log(substring("hello",2,3));//l
console.log(substring("ernesto",2,3));//n
console.log(substring("hello",2,30));//llo
console.log(substring("hello",-2,3));//(empty string)
console.log(substring("hello",0,5));//hello
console.log("hello".slice(2,"2"));//hel