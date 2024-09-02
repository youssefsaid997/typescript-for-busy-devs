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
