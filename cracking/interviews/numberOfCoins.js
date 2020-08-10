
//coins of 25,10,5,1
function numCoins(n){
    if(typeof(n)!= "number") throw new Error({msg:"this is not a number"})
    
    if(n<10){
        return n
    }
    if(n<25){
        return Math.floor(n/10) + numCoins(n%10)
    }
    if(n>50){
        return Math.floor(n/25) + numCoins(n%25)
    }
    if(Math.floor(n/10) + numCoins(n%10)>Math.floor(n/25) + numCoins(n%25)){
        return Math.floor(n/25) + numCoins(n%25)
    }
    return Math.floor(n/10) + numCoins(n%10)
    
}

console.log(numCoins(100))