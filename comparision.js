// ***** normal comparisions ***
// console.log(2 > 1)

// ********** type comparision conflict *********
// console.log("2" > 1)


// ******* NEVER DO THIS TYPE OF COMPARISION IN JS **********
// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

/*
comparision convert null to a number, treating it as 0, that's why null >= 0 gives true and null > 0 gives false

comparisions : > < >= <=
equality check : == ===
*/

// triple ====
// console.log("2" === 2) 
// checks the datatype also