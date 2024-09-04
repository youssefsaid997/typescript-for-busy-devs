// For types and interfaces there is no much difference

// for the interfaces we use it to create objects only but for other types like union type , tuple or dictionary we will find it hard to create it.

// it will not be hard but it will make the the reading of the code hard.

const returnedValue: number | string | undefined = "";

// for example above we can't define a type for that using interface
interface IReturnedValue {
  // ?? what will we write
}

// that's why typescript introduced (type) keyword to create this type of types and to help also creating objects
type ReturnedValue = number | string | undefined;

const anotherValue: ReturnedValue = "";

// so we can subtitute the type in line 7 with what we did in line 17

// NOW let's discuss other types you can create :

// Object literal::
// for example you want to create a User Object
// first define the Properties you want to add and its types and use type keyword to annotate the object.

type User = {
  username: string;
  age: number;
  email: string;
  password: string;
};

// when declairing a variable with the User type it will throw error because it wants you create the object with the types
const userOne: User = {}; // compile error because properties are missing

// after defining the properties the error will go and if any properties with wrong

const userTwo: User = { username: "", password: "", email: "", age: 20 };

// Union Type
// Sometimes you need to define two or more types for one variable as you don't know which type will return to you , or you want only one of some types

// for example :
const val: Value = 5;

// so we can use it here as following:
type Value = string | number;

// Tuples --> ["ahmed",1345];

// the Tuple is a type of value that would carry array of values as specific values for example it you want to add a user and his id in a value or user and his age as a key value pair you can use tuple;
type UserTuple = [string, number];

const userTuple: UserTuple = ["Ahmed", 123];

// but also you can create a Generic tuple

type genericTuple<T, M> = [T, M];

const anotherElement: genericTuple<string, boolean> = ["ahmed", true];
