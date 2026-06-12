// object literal
/*
const user = {
    usernmame: "pritesh",
    loginCount: 8,
    signedIn: true,
    getUserDetail: function(){
        // console.log("got user details");
        console.log(`username: ${this.usernmame}`);     
    }
}
console.log(user.getUserDetail());
*/

// constructor function
/*
function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
}

const userOne = new User('hitesh', 12, true) // empty object is created, constructor functin is called due to new keyword, then arguments are packed.. then this keyword injects the values in the arguments
const userTwo = new User('pritesh', 14, false)
console.log(userOne);
console.log(userTwo);
*/

// prototype behaviour
// default behaviour of js is prototyple
// new keyword. classes. classes. inheritance
// if it doesnt understand anything, it keeps finding until it find null
// going up and up (prototypal inheritance)
// array -> object -> null (object is array's parent, and null is object's parent)
// same for strings
// function ka parent bhi object hai

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function (){
    console.log(`score is ${this.score}`);
}

let chai = new createUser("chai", 24)
let tea = new createUser("tea", 254)

chai.printMe()
chai.increment()
chai.printMe()
tea.printMe()
tea.increment()
tea.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

