// Given two strings, write a method to decide if one ia a permutation of the other.



function isPermutation(s1,s2){
    
    //check length
    if(s1.length != s2.length) return false

    //sort the strings 
    let w1 = s1.split("").sort()
    let w2 = s2.split("").sort()

    //check if string are the same
    if (w1.join("") === w2.join("")) return true
    
    return false
}
function isPermutation2(s1,s2){
    
    //check length
    if(s1.length != s2.length) return false
    //create map 
    let aux = new Array(128)
    aux.fill(0)
    //fill with key chars in w1 and keys is number of apperance
    for (let key in s1){
        aux[s1.charCodeAt(key)]++
    }
    for (let key in s2){
        aux[s2.charCodeAt(key)]--
        if(aux[s2.charCodeAt(key)]<0) return false
    }
    
    return true
}
console.log(isPermutation2("hola","hlao"))


