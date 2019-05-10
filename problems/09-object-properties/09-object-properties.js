/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for(let key in someObj){
        console.log(`the ${key} of iroman : ${ someObj[key]}.`);
    }


}


let ironMan = {
    name:"Tony",
    lastname:"Stark",
    state:"Activo",
    superPowers:[
        "Genius","Billionare","Playboy","Filantropo"
    ],
    phoneNumber:'987-223-1234',

    
}
objectProperties(ironMan);

