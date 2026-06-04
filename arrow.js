// this -> refers current context

// window object is the global object in the browser

/*
const user = {
    username: "pritesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`)
        console.log(this); // consoles the current context of this object
    }
}

user.welcomeMessage()
user.username = "purab"
user.welcomeMessage()
*/

/*
function chai(){
    let username = "pritesh"
    console.log(this.username); // does not work
}

chai()
*/


// ************** ARROW FUNCTION ****************
/*
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(7,3))
*/

// implicit return
// const addTwo = (num1, num2) => num1 + num2 // no need of return keyword

// return an object in arrow function
/*
const returnObject = () => ({username: "pritesh"})
console.log(returnObject())
*/

