// Implement and algorithm to determine if a string has al unique characters. 
// What if you can't use additional data structure?


function hasAllUnique(s){
    if (typeof(s)!="string"){
        throw new Error("this is not a string")
    }
    let myS = s.slice().split("")
    let uniques = new Map()
    for(let value of myS){
        if (uniques.has(value)){
            return false
        }
        uniques.set(value,true)
    }
    return true

}
console.log(hasAllUnique("hoola"))