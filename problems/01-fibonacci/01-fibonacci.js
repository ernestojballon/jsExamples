/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
//
function fib(n) {
    if (n==0 || n==1) return n;
    let fib = [0,1];
    while(fib.length<=n){
        fib.push(0);
        fib[fib.length-1] = fib[fib.length-2] + fib[fib.length-3];
    }
    return fib[fib.length-1]
}
    console.log(fib(5));

           
//We also can use the golden ratio formula
//https://www.mathsisfun.com/numbers/fibonacci-sequence.html

function fibGolden(n){
    let golden = 1.618033988749895;
    let result = (Math.pow(golden,n)-Math.pow((1-golden),n))/Math.pow(5,0.5);
    return Math.round(result);
}


    console.log(fibGolden(5));

