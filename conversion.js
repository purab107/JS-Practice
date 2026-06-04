/*let score = "33aa"

console.log(typeof score)

let value = Number(score)

console.log(typeof value)

console.log(value) //non pure integer on conversion gives NaN  
*/

// let cond = true
// console.log(typeof cond)
// let newvalue = Number(cond)
// console.log(newvalue)

let val = ((3+4) > (8*4))
let bul = Boolean(val)
// console.log(bul) 
// will give false if you pass null

let nava = Number(val)
// console.log(nava) // will give 0 as the condition gives false

// ***************** Operations ******************
/*
console.table([(2+2), (4-1), (2*2), (2**3), (4/2), (6%2)]);
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 4      │
│ 1       │ 3      │
│ 2       │ 4      │
│ 3       │ 8      │
│ 4       │ 2      │
│ 5       │ 0      │
└─────────┴────────┘
*/

/*
console.table([("2"+2), (2+"2"), ("2"+"2"), (2+2)])
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ '22'   │
│ 1       │ '22'   │
│ 2       │ '22'   │
│ 3       │ 4      │
└─────────┴────────┘
*/