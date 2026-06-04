const name = "pritesh"
const repoCount = 50

// OLD WAY OF CONSOLE LOGGGING THIS TYPE OF STRING
//console.log(name + repoCount + " value") 

// NEW WAY OF DOING IT
// string interpolation
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// string object declaration
const gameName = new String('pritesh-gaming')

// methods in string
// console.log(gameName.length)
// console.log(gameName.toUpperCase()) // changes the copy of OG string
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf('t'))

// const newStr = gameName.substring(0, 4);
// console.log(newStr) 

// const sliceStr = gameName.slice(2, 4)
// console.log(sliceStr)

const str = "   pritesh    "
// console.log(str)
// console.log(str.trim()) // removes white spaces

const url = "https://pritesh.com/pritesh%20homepage"

// console.log(url.replace('%20', '__')) // replaxces

// console.log(url.includes('handsome')) // checks if the string contains any word

const strray = "peter-luke-ava-danny-sam"
// console.log(strray.split('-')) // converts string to array

let text2 = "are ultimate spiderman characters"

// console.log(strray.concat(" ", text2))

// console.log(text2.slice(7)) // statrts the string with 7th index
// console.log(text2.slice(7,13)); // starts from 7th index goes to 13-1 index

// console.log(text2.substring(7,13)); // starts from 7th index goes to 13-1 index

// console.log(text2.isWellFormed()); // string is well formated or not

let num = "peter"
// console.log(num.padStart(9, "s")) // pads string with another string combining any character you pass
// same for padEnd()

console.log(num.repeat(2)) // repeats any string n number of times without any white space

