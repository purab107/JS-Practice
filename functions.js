/*
function addTwoNumbers(num1, num2){
    // console.log(num1 + num2)
    return num1 + num2
}

const result = addTwoNumbers(2,3)
console.log(result);
*/

/*
function userLoginMessage(username){
    if(!username){
        return `please enter any name`
    }
    return `${username} just logged in`
}

console.log(userLoginMessage());
*/

/*
// Rest Operator in Functions
function calculateCarPrice(...num1){
    return num1 // will return an array
}

// function calculateCarPrice(val1, val2, ...num1){
//     return num1 // will return only 500 and 2000 in an array
// }

console.log(calculateCarPrice(200, 400, 500, 2000));
*/

/*
const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
*/

const newArr = [20, 30, 40, 50]

function getArrayValue(getArray){
    return getArray[2]
}

console.log(getArrayValue(newArr))