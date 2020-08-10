function mergeSort(arr){
    
    if (arr.length==1){
        return arr
    }
    let half = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,half))
    let right = mergeSort(arr.slice(half))

    let index1 = index2 = 0
    //build the new Array
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
    return newArr//return the build array
    
}
function bubbleSort(arr){
    let index1 = index2 = 0
    while (index1<arr.length){
        index2=0
        while(index2 < arr.length-1){
            if(arr[index2] > arr[index2+1]){
                let temp = arr[index2]
                arr[index2] = arr[index2+1]
                arr[index2+1]= temp
            }
            index2++
        }
        index1++
    }
    return arr
}
let arr = []
for (let i =0 ; i<200000 ; i++){
    arr[i] = Math.floor(Math.random()*11)
}
//console.log(arr)
//console.log(bubbleSort(arr))
console.log(mergeSort(arr))