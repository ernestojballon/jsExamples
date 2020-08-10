// compress str using count of the characters
// aaabbcccc --> a3b2c4
// aabbaa --> a2b2a2
function stringCompress(str){
    let arr = str.split("")
    let count = 0
    let empty = []
    for(let x = 0; x < arr.length ; x++){
        count++
        if( arr[x] != arr[x+1] || x >= arr.length-1 ){
            empty.push(arr[x])
            empty.push(count)
            count = 0
        }
    }
    if (empty.length >= arr.length) return arr.join("")
    return empty.join("")
}

console.log(stringCompress('aabbbbbcccccccc'))