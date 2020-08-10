function permutationPalindrome(s){
    //take out spaces
    let myS = s.split(" ").join("").toLowerCase()
    //even or odd 
    let arr = new Array(128)
    arr.fill(true)
    if(myS.length%2 == 0){
        //if even all chars inside has to be even 
        for(let key in myS){
            arr[myS.charCodeAt(key)] = !arr[myS.charCodeAt(key)]
        }
        return arr.every(value=>{
            return value  
        })

    }else{
        //if odd all chars inside has to be even except one
        let except = 1
        for(let key in myS){
            arr[myS.charCodeAt(key)] = !arr[myS.charCodeAt(key)]
        }
        
        return arr.every(value=>{
            if(value) {
                return value
            }else if(except>0){
                except--
                return true 
            }else{
                return false
            }
        })
    }
}


console.log(permutationPalindrome("TAco aco"))
