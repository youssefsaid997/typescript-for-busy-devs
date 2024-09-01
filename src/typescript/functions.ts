// For functions we can define the paramters we are passing and its types

function myFunction(firstInput: string, secondInput: number) {}

// in this example we defined the types for the paramters
// @Paramter firstInput : string
// @Paramter secondInput : number

// and also we can define the return type of the function
// @return : void
// but you can use other types of course if you are returning

// function otherFunc(): number {} // error you should return 5

// if you define a return type it will throw a compile error till you add the return statment and the value based on the value type

function otherFunction(): number {
  return 4;
}

// if you are writing a function try to write the function with fewer lines
// try to let the function say a story don't write much code that is not declaritive,

// for example
/* function badExample(){
let value;
let anotherValue;
for(let i=0;i<=5;i++){
    doing things here
}

if(typeof value !== string || value.lenght ===0 ){
    throw new Error
}
if(!(value.lenght >= 3)){
    throw new Error()
}

// return 
}

*/

// this is called impertive code
// we can take validation if conditions and replace it function with declairtive name such as isStringValue and isValidLength()

// and write inner functions as story step by step
