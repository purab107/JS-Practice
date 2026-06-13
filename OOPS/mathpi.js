// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log(chai);
// const descriptor = Object.getOwnPropertyDescriptor(chai, "name")
// console.log(descriptor);

Object.defineProperty(chai, 'name', {
    writable: false,
  enumerable: false,
  configurable: false
})

const descriptor = Object.getOwnPropertyDescriptor(chai, "name")
console.log(descriptor);
