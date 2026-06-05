// for(let i=0; i<=10; i++){
//     console.log(i);
// }

/*
for(let i=0; i<=5; i++){
    //console.log(`outer loop value: ${i}`)
    for(let j=0; j<=5; j++){
        //console.log(`inner loop value: ${j} and inner loop value: ${i}`)
        //console.log(i + ' x ' + j + ' = ' + i * j);
    }
}
    */

// outer loop value: 0
// inner loop value: 0 and inner loop value: 0
// inner loop value: 1 and inner loop value: 0
// inner loop value: 2 and inner loop value: 0
// inner loop value: 3 and inner loop value: 0
// inner loop value: 4 and inner loop value: 0
// inner loop value: 5 and inner loop value: 0
// outer loop value: 1
// inner loop value: 0 and inner loop value: 1
// inner loop value: 1 and inner loop value: 1
// inner loop value: 2 and inner loop value: 1
// inner loop value: 3 and inner loop value: 1
// inner loop value: 4 and inner loop value: 1
// inner loop value: 5 and inner loop value: 1
// outer loop value: 2
// inner loop value: 0 and inner loop value: 2
// inner loop value: 1 and inner loop value: 2
// inner loop value: 2 and inner loop value: 2
// inner loop value: 3 and inner loop value: 2
// inner loop value: 4 and inner loop value: 2
// inner loop value: 5 and inner loop value: 2
// outer loop value: 3
// inner loop value: 0 and inner loop value: 3
// inner loop value: 1 and inner loop value: 3
// inner loop value: 2 and inner loop value: 3
// inner loop value: 3 and inner loop value: 3
// inner loop value: 4 and inner loop value: 3
// inner loop value: 5 and inner loop value: 3
// outer loop value: 4
// inner loop value: 0 and inner loop value: 4
// inner loop value: 1 and inner loop value: 4
// inner loop value: 2 and inner loop value: 4
// inner loop value: 3 and inner loop value: 4
// inner loop value: 4 and inner loop value: 4
// inner loop value: 5 and inner loop value: 4
// outer loop value: 5
// inner loop value: 0 and inner loop value: 5
// inner loop value: 1 and inner loop value: 5
// inner loop value: 2 and inner loop value: 5
// inner loop value: 3 and inner loop value: 5
// inner loop value: 4 and inner loop value: 5
// inner loop value: 5 and inner loop value: 5

let arr = ["spiderman", "batman", "superman"]

// for of loop
// for (const val of arr){
//     console.log(val);
// }

// const greetings = "hello world"
// for (const element of greetings) {
//     console.log(element);
// }

// maps
/*
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED")
map.set('FR', "FRANCE")

console.log(map);

for(const [key, value] of map){
    console.log(`${key} : ${value}`);
} // gives back an array
*/
// for of loop does NOT work on objects

// for in loop for objects
// const obj = {
//     js: "javascript",
//     cpp: "C++",
//     py: "python"
// }

// for (const key in obj) {
//    console.log(`${key} : ${obj[key]}`);
// }

// for in loop accesses the keys (index) not the values
// map is not iterable by for in loop

// for each loop
const coding = ["js", "ruby", "c++", "python"]
// higher order function
// call back function does not have any name
// parameter of callback function is called items

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach((val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// for each loop gets three parameters in callback function
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// iterating arrays of objects
const myLanguage = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "jdk"
    },
    {
        languageName: "C#",
        languageFileName: "cs"
    },
]

myLanguage.forEach((item) => {
    // console.log(item); // will print entire object
    // console.log(item.languageName) // will print specific key's values
})

