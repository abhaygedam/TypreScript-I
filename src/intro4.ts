
interface User{
    type?: "user",
    name: string,
    age: number,
    occupation: string,
}

function check(u: User) {
    console.log(typeof(u.type));
}

check({name:"abhay", age:22, occupation:"learning"})