/*const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    // db calls, cryptography, network
    setTimeout( function () {
        console.log('async task is completed')
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise conusmed");
})*/

// const promiseThree = new Promise(function (resolve, reject){
//     setTimeout(() => {
//         resolve({username: "chai", email: "chai@example.com"})
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR : SOMETHING WENT WRONG')
//         }
//     }, 1000);
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(err){
//     console.log(err);
// }).finally(() => {
//     console.log("the promise is resolved or rejected");
    
// })

const promiseFive = new Promise(function (resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else{
            reject('ERROR : JAVASCRIPT WENT WRONG')
        }
    }, 1000);
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}