// decorator design patter it is a famous DP used in many applications and frameworks such as angular and nestjs

// It is Structural design pattern that can modify the structure of the class or function annotated with the decorator

// it has types => decorator can be:
// 01.class decorator
// 02.member decorator => method , property => 2 types
// 03.object decorator => decorator returns a new object or new behaviour
// 04.function decorator => decorator on regular functions

// in js/ts world decorators are functions that can add behaviour or modify the objects created or add some rules for some data members

// class Decorator;

function ClassDecorator<T extends Constructor>(Target: T) {
  console.log(Target);
  return class BMW extends Target {
    random = 4;
  };
}

@ClassDecorator
class Car {
  constructor() {}
}

const car = new Car();
console.log(car); // this will throw an error and it will say it is from line 19
// i added a property in the tsconfig to allow decorators -> experimentalDecorator:true

// so the target in the decorator is the element beneath it
// in this case we know that class in js is a constructor function that is used to create new object
// if we wanted to symbolize it => ()=>{} : {} which means a function that returns an object
// and this is the target we have

type Constructor = { new (...args: any[]): {} };

//  how angular handle the decorator;

function Component(options: any) {
  return function <T extends Constructor>(Target: T) {};
}

@Component({})
class InputComponent {}

// we also can use decorator as validators

class User {
  @Min(3)
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// by defining the function of Min and Max as wrapper around the decorator
function Min(limit: number) {
  return function (Target: any, propertyName: string) {
    let value: string;
    const setter = function (newValue: string) {
      if (newValue.length < limit) {
        throw new Error(`minmum length must be ${limit}`);
      }

      value = newValue;
    };
    const getter = function () {
      return value;
    };

    Object.defineProperty(Target, propertyName, {
      get: getter,
      set: setter,
    });
  };
}

const user = new User("ali"); // no error will be thrown because name length = 3
console.log(user);

// but to let the field decorator to work in tsconfig change useDefineField to false

const secondUser = new User("az"); // error will be thrown because length is lesser than 3
console.log(secondUser.name);

// const newUser = new User("");
// console.log(newUser);

// these validators are used in class-validator library if you want to search about
