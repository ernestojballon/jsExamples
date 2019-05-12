/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, start , deleteCount) {
    const max = Math.max,
          min = Math.min,
          len = someArr.length;
          
    let element,//new element to insert
        k=0,//index counter in somearr
        new_len,//new arr len
        result = [],
        shift_count,//index counter in the new array
        toRemove,//count ofitem to remove
        toInsert = max(arguments.length-3,0);//count of item to insert

    start = start || 0;
    if(start < 0){
        start += len;
    }
    start = max(min(start,len),0);
    toRemove = max(min(typeof deleteCount === "number" ? deleteCount : len,len-start),0) || 0 ;
    
    new_len = len-1 + toInsert - deleteCount;
    result.length = new_len;
    while(k < start){
        element = someArr[k];
        if (element !== undefined){
            result[k] = element;
        }
        k+=1;
    }
    shift_count = k;
    while(toRemove >  0){
            k++;
            toRemove--;
    }
    
    let counter = 0;
    while (toInsert > 0){
        result[shift_count]= arguments[3 + counter];
        shift_count++;
        counter++;
        toInsert--;   
    }  
    while(k < someArr.length){
        element = someArr[k];
        if (element !== undefined){
            result[shift_count] = element;
        }
        shift_count+=1;
        k++;
    }
    return result;
}
console.log(spliceElement('heo',2,0,'l','l'));//hello
console.log(spliceElement('1234467',4,1,'5'));//1234567
