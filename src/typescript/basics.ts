/*
Typescript is a super-set of javascript which means it is a wrapper around javascript and gives js utilities for development

Here we will share some basics for the typescript to help developers in there journey to learn Typescript 
*/

// Types in Typescript
// TS has the same types of the javascript
// number, string, boolean, undefined, null, bigInt, Symbol

// But also you can create your own type using the combination of these types and this will create other famous types such as:
// union type , dictionary, Tuples, Enums

// in ts we can define the type of a varibale by using : after the varibale

const myNumber: number = 4;
const myString: string = "";
const myNull: null = null;

// and so on, but also you can declair a variable without declairing the type,

const anotherString = "";

// if you hover over the variable you will find it took the type of the value passed to it , and this called=> "TYPE INFERENCE"
// --
// Type Inference

// there are many types typescript introduced to us:
// unknown, void, never, any

// never is type that tells function that is should never return anything
// because maybe a function we use it to throw error
