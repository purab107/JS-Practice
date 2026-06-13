const arr = [1, 2, 3, 4, 5]

// console.log(arr);
/*
arr.push(6) // adds element at last
console.log(arr); 

arr.pop() // removes element from last
console.log(arr); 

arr.unshift(20) // adds element at first
console.log(arr); 

arr.shift() // removes element from first place
console.log(arr) 
*/
/*
console.log(arr.includes(9))

console.log(arr.indexOf(3))
*/

/*
const navaArray = arr.join() // new array is in string
console.log(typeof navaArray)
*/

const arr1 = arr.slice(1,3) // slices the copy of array (does not change the og array)
// does not include second parameter index
// console.log("A", arr);
// console.log(arr1);

const arr2 = arr.splice(1,3) // removes specific part from the og array
// also includes the second parameter index
// console.log("B", arr);
// console.log(arr1);
/*
const marvel = ["spiderman", "ironman", "hulk"]
const dc = ["superman", "batman", "flash"]

const omniverse = marvel.concat(dc) // gives a new array which is concatinated version of two versions

// onsole.log(omniverse)

const spreading = [...marvel, ...dc]
// console.log(spreading) // spreading (concatinating two arrays)

const arrayOfArrays = [1,2,3,[4,5,6],7,8,[6,7,[9,10]]]

const copyOfArrays = arrayOfArrays.flat(Infinity)
console.log(copyOfArrays)
*/
console.log(Array.isArray("pritesh"));
console.log(Array.from("pritesh"));

let sc1 = 100
let sc2 = 200
let sc3 = 300

console.log(Array.of(sc1,sc2,sc3))
