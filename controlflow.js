// if else statement
/*
const balance = 1000
if(balance < 500){
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than 750");
} else if(balance < 900){
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("allow to buy course")
}

const loggedFromGoogle = false
const loggedFromEmail = true
if(loggedFromEmail || loggedFromGoogle){
    console.log("user logged in");
}
*/

// switch case
/*
const month = 3
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    default:
        console.log("default block");
        break;
}
*/

// truthy and falsy values
// assuming the value is true or false
/*
falsy values :
false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/
// rest are truthy values
// example -> "0", 'false', " ", [], {}, function(){}

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }

/*
    false == 0 -> true
    false == '' -> true
    0 == '' -> true
*/

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = null ?? 10 // assigns the non null or non undefined values
console.log(val1);

// terniary operator

// condition ? true : false

const price = 100
price <= 80 ? console.log("less than 80") : console.log("perfect price");