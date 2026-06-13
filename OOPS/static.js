class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
        
    }

    static createId(){
        let arr = [1,2,3,4,5]
        let str = ""
        for(let i=0; i<3; i++){
            let randomNumber = Math.floor(Math.random() * arr.length)
            let temp = arr[randomNumber]
            str = str + String(temp)
        }
        return `${str}`
    }
}

const pritesh = new User("pritesh")
console.log(pritesh.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}


const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()