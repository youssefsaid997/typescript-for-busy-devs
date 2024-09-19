// let's talk about mutability of the values
// for example

let username = "Username"; // this value is mutable it can be changed and modified

const user = {
  name: "name",
  age: 27,
}; // this value is immutable because its reference is saved because of const
// however i can change the values inside
user.name = "youssef";
console.log(user); // {name:"youssef",age:27}

// we can use js functions like Object.freeze but this will complicate the coding experience
// thats why TS provided a way to prevent any change in mutable data
// it can be used in OOP

class User {
  constructor(
    private readonly username: string,
    private readonly age: number
  ) {}
}

// and if we want the object to be all readonly we can use [as] keyword

const anotherUser = {
  username: "",
} as const;
