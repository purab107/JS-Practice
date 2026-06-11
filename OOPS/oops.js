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