// singleton
// constructor -> Object.create()

// object literals
/*
const mySym = "mykey";
let user = {
    name: "Pritesh",
    age: 22,
    [mySym]: "mykey1", //it must be declared outside the object
    "fullname": "pritesh-sahare",
    location: "gotham",
    email: "pritesh@gotham.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday"]
}

// how to access objects
// console.log(user.email);
// console.log(user["email"]); // for accessing keys which are encoded in ""

// console.log(user)

user.greetings = function(){
    console.log(`hello ${this.name}, how are you ??`);
}

console.log(user.greetings()); // why undefined ??
*/

/*
const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "pritesh",
            lastname: "sahare"
        }
    }
}

console.log(regularUser.full);

console.log(regularUser.fullname.userfullname.firstname) // nested objects

//optional chaining
console.log(regularUser.fullname?.userfullname.firstname) // used for protection if that key does not exist
*/

// combining two objects
/*
const obj1 = {
    1: "a", 2: "b"
}

const obj2 = {
    3: "c", 4: "d"
}

const obj3 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1, ...obj2} // object spreading
console.log(obj3)
*/

/*
const users = [
    {
        id: 1
    }, {
        id: 2
    }, {
        id: 3
    }, {
        id: 4
    }
]

// console.log(users[1].id) //accesing the values

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "pritesh",
            lastname: "sahare"
        }
    }
}
 
console.log(Object.keys(regularUser)) // very very important as it's puts all the keys in array
// output -> [ 'email', 'fullname' ]

console.log(Object.values(regularUser))
// [
//   'someone@gmail.com',
//   { userfullname: { firstname: 'pritesh', lastname: 'sahare' } }
// ]

console.log(Object.entries(regularUser));
// [
//   [ 'email', 'someone@gmail.com' ],
//   [ 'fullname', { userfullname: [Object] } ]
// ]

console.log(regularUser.hasOwnProperty('isLoggedIn')); // false
*/

// destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh-sir"
}

const {courseInstructor: instruct} = course
console.log(instruct)

/*
const navbar = ({company}) => {

}

navbar(company = "hitesh")
*/

