const mynums = [1,2,3]

const mytotal = mynums.reduce((acc, curr) => {
    console.log(`acc: ${acc}, curr: ${curr}`);
    return acc+ curr
}, 0)

console.log(mytotal);
