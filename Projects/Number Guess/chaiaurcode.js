// generate random number
let randomNumber = Math.floor((Math.random() * 100) + 1)

const form = document.querySelector('.form')
const userInput = document.getElementById('guessField')
const submit = document.getElementById('subt')
const resultPara = document.querySelector('.resultParas')
const guessSlot = document.querySelector('.guesses')
const feedback_low_or_high = document.querySelector('.lowOrHi')

console.log(form);

console.log(userInput);
console.log(submit);
console.log(resultPara);
console.log(guessSlot);
console.log(feedback_low_or_high);