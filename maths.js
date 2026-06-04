console.log(`abs : ${Math.abs(-4)}`);

console.log(`round up : ${Math.round(4.6)}`);

console.log(`ceiling : ${Math.ceil(4.2)}`);

console.log(`floor : ${Math.floor(4.9)}`)

console.log(`finding max : ${Math.max(4, 6, 3, 7, 1)}`);

console.log(`finding min : ${Math.min(3,2,6,4,7)}`)

// Math.random() gives number between 0 and 1
console.log(`generating random number : ${Math.round((Math.random()*10) + 1)}`)

const min = 10
const max = 20
console.log(`max min cal : ${Math.floor(Math.random() * (max - min + 1)) + min}`)
// random gives a random number between 0 and 1.. so we multiply it by (max-min+1) to find a number from 0 to 11.. then for setting the minimum parameter, we add the minimum number into the equation and we round the entire thing in math.floor