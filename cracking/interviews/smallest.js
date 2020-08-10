//find the m smallest in the array
function smallest(arr,m){
    let newArr = []
    newArr.push(arr[m])
    //use a flag because obviously arr[m] has to be one time in the array
    let flag = false
    let index = 0
    for(let i=0 ; i<arr.length ; i++){
        if( arr[i] == arr[m]){
            //if arr[m] never was showed up so it has to be false
            if (flag == true ){
                newArr.splice(index,0,arr[m])
                index++
            }
            // change to true because it has one ocuurence already
            flag = true

        }else if(arr[i] > arr[m]){
            //inside if the next value is greater than my pivot
            newArr.push(arr[i])
        }else{
            //inside if the value is smaller than my pivot
            newArr.unshift(arr[i])
            //add 1 to index because my pivot was moved one space to the right
            index++
        }
    }
    console.log('this is ny new array: ',newArr,arr[m])
    if(index > m ){
        return smallest(newArr.slice(0,index),m)//if it is greater , i choose the first part in a recursive
    }else if(index< m){
        // index of newArr.indexOf(arr[m]) > m 
        // run smallest in right half
        return smallest(newArr.slice(index),m-index)
    }
    return newArr[m]// if the posittion index == position of pivot
}
let arr = []
for (let i =0 ; i<20000000; i++){
    arr[i] = Math.floor(Math.random()*2000000)
}
//console.log(arr)
//console.log(mergeSort(arr))
//console.log(smallest(arr,20000-1))
//console.log(mergeSort(arr)[500])
function mergeSort(arr){
    if (arr.length==1){
        return arr
    }
    let half = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,half))
    let right = mergeSort(arr.slice(half))
    let index1 = index2 = 0
    let newArr = []
    while (index1 < left.length && index2 < right.length){
        if (left[index1] < right[index2]){
            newArr.push(left[index1])
            index1++
        }else{
            newArr.push(right[index2])
            index2++
        }
    }
    if(index1 == left.length ){
        while(index2 < right.length){
            newArr.push(right[index2])
            index2++
        } 
    }
    if(index2 == right.length ){
        while(index1 < left.length) {
            newArr.push(left[index1])
            index1++
        }
    }
    return newArr
}
// 7 5 5 6 4 7    1,4
console.log(smallest2(arr,500))
console.log(arr.sort((a,b)=>b>a?-1:1)[500])
function smallest2(arr,m){
    if (arr.length==1) return arr[m]
    if(arr.length == 2 ){
        if (arr[0]>arr[1]){
            let temp = arr[0]
            arr[0] = arr[1]
            arr[1] = temp
        }
        return arr[m]
    }
    let pivot = arr[0]
    let indice1 = 1
    let indice2 = arr.length-1
    while(indice2 > indice1 ){
        
        while(pivot >= arr[indice1]&& indice1<arr.length){
            indice1++
        }
        while(pivot <= arr[indice2] && indice2>0){
            indice2--
        }
        if(arr[indice1] > arr[indice2] && indice2>indice1){
            let temp = arr[indice1]
            arr[indice1] = arr[indice2]
            arr[indice2] =  temp
            
        }
    }
    //console.log("indices before::",indice1,indice2,m)
    //console.log(arr)
    let temp = arr[indice2]
    arr[indice2] = pivot
    arr[0] =  temp
    
    //console.log("indices::",indice1,indice2)
    //console.log(arr)
    if(m < indice2){
        return smallest2(arr.slice(0,indice2),m)
    }else if(m > indice2){
        //console.log(arr.slice(indice2),m-indice2)
        if(indice2==0) indice2=1
        return smallest2(arr.slice(indice2),m-indice2)

    }else{
        return arr[m]
    }

}
//3 3 5 7 4 6 