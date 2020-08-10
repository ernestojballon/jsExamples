function editOrReplace(s1,s2){
    // insert, remove or replace a char of he string
    //check length -1 or 0
    if (s1.length - s2.length == 1 ){
        //check every char in shorter array to inside bigger array
        return verifyArr(s1,s2)
    }else if(s2.length - s1.length == 1 ){
        // check every char in shorter array to be contain is bigger
        return verifyArr(s2,s1)
    }else if(s2.length == s1.length){
         //allow one char to be different 
         return verifyOneDiff(s2,s1)
    }

    return false
}
function verifyOneDiff(arr1,arr2){
    let index1 = index2 = 0
    let flag = false
    while(index1<arr1.length && index2<arr2.length){
        if(arr1[index1]!=arr2[index2]){
            if(flag) return false
            flag = true
        }
        index1++
        index2++ 
    }
    return true
}
function verifyArr(big,small){
    let index1 = index2 = 0
    while(index1<big.length && index2<small.length){
        if(big[index1]!=small[index2]){
            if(index1!=index2){
                return false
            }
            index1++
        }else{
            index1++
            index2++
        } 
    }
    return true
}


console.log(editOrReplace('pale','pali'))