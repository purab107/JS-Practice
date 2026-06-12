function setUserName(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // passing our own this
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("hitesh", "hitesh@gmail.com", "passssword")
console.log(chai);
