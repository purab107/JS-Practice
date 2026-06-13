// class Car{
//     constructor(brand, model){
//         this.brand = brand;
//         this.model = model;
//     }


// }

// const car1 = new Car("Toyota", "Camry")
// const car2 = new Car("Hyundai", "Creta")

// console.log(car1);
// console.log(car2);

// class Student{
//     constructor(name, course){
//         this.name = name;
//         this.course = course;
//     }

//     introduction(){
//         console.log(`Hi, I am ${this.name} and I study ${this.course}`);
        
//     }
// }

// const std1 = new Student("pritesh", "btech")
// const std2 = new Student("Purab", "MCA");
// std1.introduction()

// console.log(std1.introduction === std2.introduction);
// output -> true
// because javascript keeps one copy of introduction method in the prototype and let the objects share it and use it instead of creating 100s of copies of the method

// OBJECT STATE CHANGES

// class BankAccount{
//     constructor(owner, balance){
//         this.owner = owner;
//         this.balance = balance;
//     }

//     withdraw(amount){
//         if(this.balance <= amount){
//             console.log(`you have insufficient funds, balance: ${this.balance}`)
//         } else {
//             this.balance -= amount;
//         }
//     }

//     deposit(amount){
//         this.balance += amount;
//     }

//     showBalance(){
//         console.log(`current balance : ${this.balance}`);
//     }
// }

// const acc1 = new BankAccount("Pritesh", 2000)
// acc1.showBalance()
// acc1.withdraw(3000)
// acc1.showBalance()
// acc1.deposit(700)
// acc1.showBalance()

// ENCAPSULATION
class User{
    #password
    constructor(name, password){
        this.name = name;
        this.#password = password;
    }

    checkPasswordLength(passcode) {
        if(passcode.length >= 8){
            console.log(passcode.length);
            return true;
        } else {
            return false;
        }
    }

    changePassword(newPassword){
        if(this.checkPasswordLength(newPassword)){
            this.#password = newPassword;
        } else{
            console.log(`Password too short`)
        }
    }

    showPasswordLenght(){
        console.log(`password length: ${this.#password.length}`)
    }
}

const user1 = new User("purab", "123456789")
user1.showPasswordLenght()
user1.changePassword("873627364676")
