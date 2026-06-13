const nums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = nums.map((num) => num + 10)
// console.log(newnums);


// chaining
// chaining works in forward manner
const newnums = nums.map((num) => num * 10).map((num) => num * 100).filter((num) => num >= 6000)
console.log(newnums);

// DO NOT FORGET TO DO OBJECT ARRAY EXERCISE - GITHUB