// Immediately Invoked Function Expressions

// used for overcoming global scope pollution 

// always use semi columns for ending the invoked function

(function chai(){
    //named IIFE
    console.log('db connected')
})();

(()=>{
    //unamed IIFE
    console.log("arrow function works tooo")
})();

((name)=>{
    //IIFE with parameters
    console.log(`hello mr. ${name}`);
})('pritesh');