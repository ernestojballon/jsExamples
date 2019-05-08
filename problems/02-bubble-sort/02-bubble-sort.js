/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let swapped ;
    for(var i = 0; i < numArray.length; i++) {
        swapped = false; //Avoid some loop that are not necesary
        for(var j = 1; j < numArray.length; j++) {
          if(numArray[j - 1] > numArray[j]) {

            var temp = numArray[j - 1];
            numArray[j - 1] = numArray[j];
            numArray[j] = temp;
            swapped = true;
          }
          //process.stdout.write('|'); // write | to evaluate iterations
        }
        if(!swapped){
            return numArray;
        }
      }
      return numArray;
  
}
let arr= [4,5,2,8];
console.log(bubbleSort(arr.slice()));
