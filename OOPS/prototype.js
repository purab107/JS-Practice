/*
let heroes = ["spiderman", "superman"]

let powers = {
    spiderman: "swinging",
    superman: "flying"
}

Object.prototype.modifyingObject = function () {
    console.log(`object is modified`)
}

powers.modifyingObject() // object has a new method
heroes.modifyingObject() // array also has a new method because of object
*/

// Modify string -> add truelength functionality
let str = "pritesh   "
String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`true length of string : ${this.trim().length}`);   
}

str.trueLength()
"programing ".trueLength()