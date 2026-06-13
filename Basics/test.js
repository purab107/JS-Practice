console.log("i will become employable in 3 months")

// variables declaration

const accountId = 1222344

let  accountEmail = "test@test.com"

var acountPassword = "12345"

accountCity = "Jaipur"

let accountState;

// accountId = 2 // const cannot be changed

accountEmail = "yoo@yoyo.com"
accountPassword = "2222"
accountCity = "benguluru"

//console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
┌─────────┬────────────────┐
│ (index) │ Values         │
├─────────┼────────────────┤
│ 0       │ 1222344        │
│ 1       │ 'yoo@yoyo.com' │
│ 2       │ '2222'         │
│ 3       │ 'benguluru'    │
│ 4       │ undefined      │
└─────────┴────────────────┘
*/

