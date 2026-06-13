// var keyword made the value accessible outside of block

// GLOBAL SCOPE
let globalVar = 10

// BLOCK SCOPE
if(true){
    let a = 10
}

/*
function one(){
    const username = "pritesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    two()
}

one()
*/

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));
